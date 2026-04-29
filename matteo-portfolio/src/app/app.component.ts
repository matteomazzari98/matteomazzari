import { AfterViewInit, Component, computed, signal } from '@angular/core';
import { AboutSection } from './components/about-section/about-section';
import { ContactSection } from './components/contact-section/contact-section';
import { EducationSection } from './components/education-section/education-section';
import { HeroSection } from './components/hero-section/hero-section';
import { ProjectsSection } from './components/projects-section/projects-section';
import { SiteFooter } from './components/site-footer/site-footer';
import { SkillsSection } from './components/skills-section/skills-section';
import { StoryRoad } from './components/story-road/story-road';
import { WorkSection } from './components/work-section/work-section';
import { Language, portfolioContent } from './data/portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroSection,
    AboutSection,
    StoryRoad,
    EducationSection,
    WorkSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    SiteFooter,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  readonly languages: Language[] = ['it', 'en'];
  readonly currentLanguage = signal<Language>(this.getInitialLanguage());
  readonly data = computed(() => portfolioContent[this.currentLanguage()]);

  ngAfterViewInit() {
    this.resetInitialScroll();
  }

  setLanguage(language: Language) {
    this.currentLanguage.set(language);
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);
  }

  private getInitialLanguage(): Language {
    const savedLanguage = localStorage.getItem('portfolio-language');

    if (savedLanguage === 'en' || savedLanguage === 'it') {
      document.documentElement.lang = savedLanguage;
      return savedLanguage;
    }

    document.documentElement.lang = 'it';
    return 'it';
  }

  private resetInitialScroll() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
  }
}
