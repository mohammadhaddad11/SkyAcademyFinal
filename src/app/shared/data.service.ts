import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: { name: string; date: Date; duration: string; salary: string }[] = [
    {
      name: 'Ali Kamal',
      date: new Date('2024-03-05'),
      duration: '1 Week (2023-04-10 - 2023-04-17)',
      salary: '500 AED',
    },
    {
      name: 'Sara Ahmed',
      date: new Date('2024-03-10'),
      duration: '3 Weeks (2023-04-20 - 2023-05-11)',
      salary: '1500 AED',
    },
    {
      name: 'Fatima Ali',
      date: new Date('2024-03-15'),
      duration: '1 Week (2023-04-25 - 2023-05-02)',
      salary: '500 AED',
    },
    {
      name: 'Omar Zaki',
      date: new Date('2024-03-20'),
      duration: '2 Weeks (2023-04-30 - 2023-05-14)',
      salary: '1000 AED',
    },
    {
      name: 'Yasmin Omar',
      date: new Date('2024-03-25'),
      duration: '2 Weeks (2023-05-05 - 2023-05-19)',
      salary: '1000 AED',
    },
    {
      name: 'Hassan Khaled',
      date: new Date('2024-03-30'),
      duration: '1 Week (2023-05-10 - 2023-05-17)',
      salary: '500 AED',
    },
    {
      name: 'Lina Mohamed',
      date: new Date('2024-04-05'),
      duration: '2 Weeks (2023-05-15 - 2023-05-29)',
      salary: '1000 AED',
    },
    {
      name: 'Rami Nader',
      date: new Date('2024-04-10'),
      duration: '3 Weeks (2023-05-20 - 2023-06-10)',
      salary: '1500 AED',
    },
    {
      name: 'Khaled Youssef',
      date: new Date('2024-04-15'),
      duration: '1 Week (2023-05-25 - 2023-06-01)',
      salary: '500 AED',
    },
    {
      name: 'Mona Samir',
      date: new Date('2024-04-20'),
      duration: '2 Weeks (2023-05-30 - 2023-06-13)',
      salary: '1000 AED',
    },
    {
      name: 'Samer Jaber',
      date: new Date('2024-04-25'),
      duration: '2 Weeks (5/6/2023 - 19/6/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Nadine Fadel',
      date: new Date('2024-04-30'),
      duration: '3 Weeks (10/6/2023 - 1/7/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Jamal Saeed',
      date: new Date('2024-05-05'),
      duration: '1 Week (15/6/2023 - 22/6/2023)',
      salary: '500 AED',
    },
    {
      name: 'Tarek Alwan',
      date: new Date('2024-05-10'),
      duration: '2 Weeks (20/6/2023 - 4/7/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Dina Mustafa',
      date: new Date('2024-05-15'),
      duration: '1 Week (25/6/2023 - 2/7/2023)',
      salary: '500 AED',
    },
    {
      name: 'Nourhan Kamal',
      date: new Date('2024-05-20'),
      duration: '2 Weeks (30/6/2023 - 14/7/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Youssef Omar',
      date: new Date('2024-05-25'),
      duration: '3 Weeks (5/7/2023 - 26/7/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Amr Fawzy',
      date: new Date('2024-05-30'),
      duration: '1 Week (10/7/2023 - 17/7/2023)',
      salary: '500 AED',
    },
    {
      name: 'Hana Mansour',
      date: new Date('2024-06-05'),
      duration: '2 Weeks (15/7/2023 - 29/7/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Mohamed Eid',
      date: new Date('2024-06-10'),
      duration: '3 Weeks (20/7/2023 - 10/8/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Amal Ayman',
      date: new Date('2024-06-15'),
      duration: '1 Week (25/7/2023 - 1/8/2023)',
      salary: '500 AED',
    },
    {
      name: 'Karim Mounir',
      date: new Date('2024-06-20'),
      duration: '2 Weeks (30/7/2023 - 13/8/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Sami Nasser',
      date: new Date('2024-06-25'),
      duration: '1 Week (5/8/2023 - 12/8/2023)',
      salary: '500 AED',
    },
    {
      name: 'Maya Zaki',
      date: new Date('2024-06-30'),
      duration: '2 Weeks (10/8/2023 - 24/8/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Nada Zain',
      date: new Date('2024-07-05'),
      duration: '3 Weeks (15/8/2023 - 5/9/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Fadi Adnan',
      date: new Date('2024-07-10'),
      duration: '1 Week (20/8/2023 - 27/8/2023)',
      salary: '500 AED',
    },
    {
      name: 'Laila Ayman',
      date: new Date('2024-07-15'),
      duration: '2 Weeks (25/8/2023 - 8/9/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Adel Anwar',
      date: new Date('2024-07-20'),
      duration: '1 Week (30/8/2023 - 6/9/2023)',
      salary: '500 AED',
    },
    {
      name: 'Farah Hany',
      date: new Date('2024-07-25'),
      duration: '2 Weeks (5/9/2023 - 19/9/2023)',
      salary: '0 AED',
    },
  ];

  constructor() {}
}
