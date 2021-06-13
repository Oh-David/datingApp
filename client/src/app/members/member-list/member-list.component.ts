import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/_services/members.service';
import { member } from '../../_models/member'

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: member[];

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers()
  {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    })
  }
}
