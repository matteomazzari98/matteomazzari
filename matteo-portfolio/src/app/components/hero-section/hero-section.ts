import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language, PortfolioUi, Profile } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  @Input({ required: true }) profile!: Profile;
  @Input({ required: true }) ui!: PortfolioUi['hero'];
  @Input({ required: true }) languageUi!: PortfolioUi;
  @Input({ required: true }) languages: Language[] = [];
  @Input({ required: true }) currentLanguage!: Language;
  @Output() languageChange = new EventEmitter<Language>();
}
