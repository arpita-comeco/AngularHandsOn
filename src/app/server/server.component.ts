import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 90;
    serverStatus: string = 'offline';
    isOnline: boolean = false;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline' ;
    }
    getColorByStatus() {
        return this.serverStatus === 'online' ? 'green' : 'red' ;
    }
    getServerStatus(){
        return this.serverStatus;
    }
    
}