import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelSrvService {
  HOST_SERVER_DOMAIN: string = 'http://localhost:8000';
  location = ['MAIN ST', 'Auction', 'D.TREE SNA', 'LAX', 'LONG BEACH', 'ONTARIO', 'SNA IRVINE'];
  verhicle_class = ['SFAR', 'SHUTTLE', 'ECAR', 'CCAR', 'CFAR', 'FFAR', 'FVAR', 'ICAR', 'CCAR',
    'IFAR', 'LCAR', 'LTAR', 'MCAR', 'MINI', 'MVAR', 'PTAR', 'SCAR', 'SPAR', 'STAR', 'XFAR', 'XSAR', 'FCAR'];
  vehicle_status = ['Available', 'Out Of Service', 'For Sale', 'Sold', 'Stolen', 'Unknown', 'Grounded',
    'O/S Problem', 'O/S Repair', 'Non-Revenue', 'OEM Grounding', 'Grounded For Sale'];
}


