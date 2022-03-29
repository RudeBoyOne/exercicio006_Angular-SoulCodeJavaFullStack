import { Component, OnInit } from '@angular/core';
import { GhRepos } from '../../models/ghRepos';
import { GhUser } from '../../models/ghUser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-show-dialog',
  templateUrl: './gh-show-dialog.component.html',
  styleUrls: ['./gh-show-dialog.component.css']
})
export class GhShowDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  repos!: GhRepos[]

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
        console.log(gUser)
        this.user = gUser
      }
    )

    this.ghService.findRepos(this.username).subscribe(
      (gRepos) => {
        console.log(gRepos)
        this.repos = gRepos
      }
    )
  }

}
