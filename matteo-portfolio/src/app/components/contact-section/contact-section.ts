import { Component, Input } from '@angular/core';
import { Contact, PortfolioUi, Profile } from '../../data/portfolio-data';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  @Input({ required: true }) contacts: Contact[] = [];
  @Input({ required: true }) profile!: Profile;
  @Input({ required: true }) ui!: PortfolioUi['sections']['contact'];
}
