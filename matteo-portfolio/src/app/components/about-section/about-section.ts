import { Component, Input } from '@angular/core';
import { PortfolioData, PortfolioUi } from '../../data/portfolio-data';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  @Input({ required: true }) about!: PortfolioData['about'];
  @Input({ required: true }) ui!: PortfolioUi['sections']['about'];
}
