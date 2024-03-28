import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-tile.component.html',
  styleUrl: './project-tile.component.css'
})
export class ProjectTileComponent {
  @Input() thumbnail!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() technologies!: string [];

}
