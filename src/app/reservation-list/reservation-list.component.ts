import { Component, OnInit } from "@angular/core";
import { Reservation } from "../models/reservation";
import { ReservationService } from "../reservation/reservation.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: "app-reservation-list",
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent],
  templateUrl: "./reservation-list.component.html",
  styleUrl: "./reservation-list.component.css",
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];
  constructor(private reservationService: ReservationService) {}
  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.reservations = reservations;
    });
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("delete request got proccessed");
    });
  }
}
