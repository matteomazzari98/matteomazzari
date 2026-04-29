import { Component, Input } from '@angular/core';
import { JourneyMilestone, PortfolioUi } from '../../data/portfolio-data';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-work-section',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './work-section.html',
  styleUrl: './work-section.scss',
})
export class WorkSection {
  @Input({ required: true }) work: JourneyMilestone[] = [];
  @Input({ required: true }) ui!: PortfolioUi['sections']['work'];
}
