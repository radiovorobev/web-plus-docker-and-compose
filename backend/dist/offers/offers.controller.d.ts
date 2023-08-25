import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    createOffer(body: CreateOfferDto, req: any): Promise<import("./entities/offer.entity").Offer>;
    getOffers(): Promise<import("./entities/offer.entity").Offer[]>;
    getOffer(id: any): Promise<import("./entities/offer.entity").Offer>;
}
