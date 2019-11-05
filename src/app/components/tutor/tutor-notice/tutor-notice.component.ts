import { Component, OnInit } from '@angular/core';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
import { NgForm } from '@angular/forms';
import { NoticeService } from '../../../services/notice.service';
import { Notice } from '../../../shared/notice.model';

declare var N: any;

@Component({
  selector: 'app-tutor-notice',
  templateUrl: './tutor-notice.component.html',
  styleUrls: ['./tutor-notice.component.scss'],
  providers: [ NoticeService ]
})
export class TutorNoticeComponent implements OnInit {

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);

    this.resetForm();
    this.refreshNoticeList();
  }

  resetForm(form?: NgForm) {
    if (form)
        form.reset();
    this.noticeService.selectedNotice = {
      _id: "",
      course: "",
      date: "",
      notice: ""
    }
}

onSubmit(form : NgForm){
  if(form.value._id == ""){
  this.noticeService.postNotice(form.value).subscribe((res) => {
    this.resetForm(form);
    this.refreshNoticeList();
    N.toast({ html: 'Saved successfully', classes: 'rounded '});
  });
  }
  else {
    this.noticeService.putNotice(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshNoticeList();
      N.toast({ html: 'Updated successfully', classes: 'rounded '});
    });
  }
}

refreshNoticeList() {
  this.noticeService.getNoticeList().subscribe((res) => {
    this.noticeService.notices = res as Notice[];
  });
}

onEdit(ntc : Notice){
  this.noticeService.selectedNotice = ntc;
}

onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.noticeService.deleteNotice(_id).subscribe((res) => {
      this.refreshNoticeList();
      this.resetForm(form);
      N.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}

}
