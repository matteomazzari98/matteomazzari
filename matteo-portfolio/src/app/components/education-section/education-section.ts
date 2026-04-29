import { Component, Input } from '@angular/core';
import { JourneyMilestone, PortfolioUi } from '../../data/portfolio-data';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss',
})
export class EducationSection {
  @Input({ required: true }) education: JourneyMilestone[] = [];
  @Input({ required: true }) ui!: PortfolioUi['sections']['education'];
}
