import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  // template: `
  //   <app-server></app-server>
  //   <p>another line</p>
  //   <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  greetingMsg:string = 'hello';
  serverCreationStatus='No server was created';
  serverName='';

  constructor() { 
    setTimeout(() =>{
      this.allowNewServer= true; 
    },2000)
  }
  displayGreeting(){
    return this.greetingMsg;
  }
  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus='Server created successfully!';
  }
  onUpdateServerName(event: Event){
    this.serverName= (<HTMLInputElement>event.target).value;
  }

}
