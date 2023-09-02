import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  topics = [
    {
      topic: 'Web Development',
      description: 'Build interactive websites, web apps, and services with various technologies.',
      url:'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-icon_8.jpg'
    },
    {
      topic: 'Python',
      description: 'Explore Python for web development, data analysis, and automation.',
      url:'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-icon_1.jpg'
    },
    {
      topic: 'UX Design',
      description: 'Create user-friendly interfaces to enhance product usability.',
      url:"https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-icon_2.jpg"
    },
    {
      topic: 'Database Design',
      description: 'Master efficient, scalable database design for data management.',
      url:"https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-icon_5.jpg"
    },
    {
      topic: 'JavaScript',
      description: 'Uncover JavaScript for dynamic web pages and applications.',
      url:"https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-icon_7.jpg"
    },
    {
      topic: 'HTML & CSS',
      description: 'Learn HTML and CSS for web content creation and styling.',
      url:"https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-icon_3.jpg"
    },
    {
      topic: 'Intro to Coding',
      description: 'Start coding journey with logic, problem-solving, and coding in languages.',
      url:"https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-icon_4.jpg"
    },
    {
      topic: 'Apps & Games',
      description: 'Dive into app and game development to entertain users.',
      url:"https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-icon_6.jpg"
    }
  ];
  
  
}
