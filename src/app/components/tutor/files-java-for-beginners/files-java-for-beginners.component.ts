import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {saveAs} from 'file-saver';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
declare var N: any;

import { Files } from '../../../shared/files.model';

import { FilesJavaForBeginnersService } from '../../../services/files-java-for-beginners.service';

const uri = 'http://localhost:3000/java_files';

@Component({
  selector: 'app-files-java-for-beginners',
  templateUrl: './files-java-for-beginners.component.html',
  styleUrls: ['./files-java-for-beginners.component.scss'],
  providers: [ FilesJavaForBeginnersService ]
})
export class FilesJavaForBeginnersComponent implements OnInit {


fileData: File = null;
previewUrl:any = null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;

course: string ;



private files = [];

constructor(private http: HttpClient, private fileService: FilesJavaForBeginnersService, private route: ActivatedRoute ) { 
  let sstring = this.route.snapshot.paramMap.get('file_course');
    this.course = sstring;
    console.log(this.course); 
}
 
fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
}
 
preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      
    
      return;
    
    }
  
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
}
 
onSubmit() {
    const formData = new FormData();
      formData.append('course', this.course);
      formData.append('file', this.fileData);
      this.http.post(uri, formData)
        .subscribe(res => {
          this.refreshFilesList();
          console.log(res);
          alert('File uploaded successfully.');
        });
      
}

onDelete(_id: string) {
  if (confirm('Are you sure to delete this file ?') == true) {
    this.fileService.deleteFile(_id).subscribe((res) => {
      this.refreshFilesList();
      N.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}

  ngOnInit() {
    this.refreshFilesList();
  }

  refreshFilesList() {
    this.fileService.getJavaFileList(this.course).subscribe((res) => {
      this.fileService.files = res as Files[];
    });
  }

  
}