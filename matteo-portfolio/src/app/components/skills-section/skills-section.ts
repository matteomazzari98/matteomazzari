import { Component, Input } from '@angular/core';
import { PortfolioUi, SkillGroup } from '../../data/portfolio-data';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  @Input({ required: true }) skills: SkillGroup[] = [];
  @Input({ required: true }) ui!: PortfolioUi['sections']['skills'];
}
