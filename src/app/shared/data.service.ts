import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: { name: string; date: string; duration: string; salary: string }[] = [
    {
      name: 'Ali Kamal',
      date: '5/3/2024',
      duration: '1 Week (10/4/2023 - 17/4/2023)',
      salary: '500 AED',
    },
    {
      name: 'Sara Ahmed',
      date: '10/3/2024',
      duration: '3 Weeks (20/4/2023 - 11/5/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Fatima Ali',
      date: '15/3/2024',
      duration: '1 Week (25/4/2023 - 2/5/2023)',
      salary: '500 AED',
    },
    {
      name: 'Omar Zaki',
      date: '20/3/2024',
      duration: '2 Weeks (30/4/2023 - 14/5/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Yasmin Omar',
      date: '25/3/2024',
      duration: '2 Weeks (5/5/2023 - 19/5/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Hassan Khaled',
      date: '30/3/2024',
      duration: '1 Week (10/5/2023 - 17/5/2023)',
      salary: '500 AED',
    },
    {
      name: 'Lina Mohamed',
      date: '5/4/2024',
      duration: '2 Weeks (15/5/2023 - 29/5/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Rami Nader',
      date: '10/4/2024',
      duration: '3 Weeks (20/5/2023 - 10/6/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Khaled Youssef',
      date: '15/4/2024',
      duration: '1 Week (25/5/2023 - 1/6/2023)',
      salary: '500 AED',
    },
    {
      name: 'Mona Samir',
      date: '20/4/2024',
      duration: '2 Weeks (30/5/2023 - 13/6/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Samer Jaber',
      date: '25/4/2024',
      duration: '2 Weeks (5/6/2023 - 19/6/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Nadine Fadel',
      date: '30/4/2024',
      duration: '3 Weeks (10/6/2023 - 1/7/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Jamal Saeed',
      date: '5/5/2024',
      duration: '1 Week (15/6/2023 - 22/6/2023)',
      salary: '500 AED',
    },
    {
      name: 'Tarek Alwan',
      date: '10/5/2024',
      duration: '2 Weeks (20/6/2023 - 4/7/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Dina Mustafa',
      date: '15/5/2024',
      duration: '1 Week (25/6/2023 - 2/7/2023)',
      salary: '500 AED',
    },
    {
      name: 'Nourhan Kamal',
      date: '20/5/2024',
      duration: '2 Weeks (30/6/2023 - 14/7/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Youssef Omar',
      date: '25/5/2024',
      duration: '3 Weeks (5/7/2023 - 26/7/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Amr Fawzy',
      date: '30/5/2024',
      duration: '1 Week (10/7/2023 - 17/7/2023)',
      salary: '500 AED',
    },
    {
      name: 'Hana Mansour',
      date: '5/6/2024',
      duration: '2 Weeks (15/7/2023 - 29/7/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Mohamed Eid',
      date: '10/6/2024',
      duration: '3 Weeks (20/7/2023 - 10/8/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Amal Ayman',
      date: '15/6/2024',
      duration: '1 Week (25/7/2023 - 1/8/2023)',
      salary: '500 AED',
    },
    {
      name: 'Karim Mounir',
      date: '20/6/2024',
      duration: '2 Weeks (30/7/2023 - 13/8/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Sami Nasser',
      date: '25/6/2024',
      duration: '1 Week (5/8/2023 - 12/8/2023)',
      salary: '500 AED',
    },
    {
      name: 'Maya Zaki',
      date: '30/6/2024',
      duration: '2 Weeks (10/8/2023 - 24/8/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Nada Zain',
      date: '5/7/2024',
      duration: '3 Weeks (15/8/2023 - 5/9/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Fadi Adnan',
      date: '10/7/2024',
      duration: '1 Week (20/8/2023 - 27/8/2023)',
      salary: '500 AED',
    },
    {
      name: 'Laila Ayman',
      date: '15/7/2024',
      duration: '2 Weeks (25/8/2023 - 8/9/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Adel Anwar',
      date: '20/7/2024',
      duration: '1 Week (30/8/2023 - 6/9/2023)',
      salary: '500 AED',
    },
    {
      name: 'Farah Hany',
      date: '25/7/2024',
      duration: '2 Weeks (5/9/2023 - 19/9/2023)',
      salary: '0 AED',
    },
  ];

  constructor() {}
}
