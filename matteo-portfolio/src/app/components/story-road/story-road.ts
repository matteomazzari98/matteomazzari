import { Component, Input } from '@angular/core';
import { JourneyMilestone, PortfolioUi } from '../../data/portfolio-data';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-story-road',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './story-road.html',
  styleUrl: './story-road.scss',
})
export class StoryRoad {
  @Input({ required: true }) milestones: JourneyMilestone[] = [];
  @Input({ required: true }) ui!: PortfolioUi['sections']['road'];
}
