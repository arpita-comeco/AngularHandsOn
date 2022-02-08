import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 90;
    serverStatus: string = 'offline';
    isOnline: boolean = false;

    getServerStatus(){
        return this.serverStatus;
    }
}