import { Component, Input } from '@angular/core';
import { PortfolioUi, Project } from '../../data/portfolio-data';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  @Input({ required: true }) projects: Project[] = [];
  @Input({ required: true }) ui!: PortfolioUi['sections']['projects'];
}
