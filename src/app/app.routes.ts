import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { StudyPageComponent } from './study/study-page/study-page.component';

export const routes: Routes = [
    {
        path: '', component: HomePageComponent
    },
    {
        path: 'study', component: StudyPageComponent
    }
];
