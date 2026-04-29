import { Component, Input } from '@angular/core';
import { PortfolioUi, Profile } from '../../data/portfolio-data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  @Input({ required: true }) profile!: Profile;
  @Input({ required: true }) ui!: PortfolioUi['footer'];

  currentYear = new Date().getFullYear();
}
