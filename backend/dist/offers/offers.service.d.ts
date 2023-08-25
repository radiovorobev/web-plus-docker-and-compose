import { CreateOfferDto } from './dto/create-offer.dto';
import { Repository } from 'typeorm';
import { Offer } from './entities/offer.entity';
import { WishesService } from '../wishes/wishes.service';
import { User } from '../users/entities/user.entity';
export declare class OffersService {
    private readonly offerRepository;
    private readonly wishesService;
    constructor(offerRepository: Repository<Offer>, wishesService: WishesService);
    create(createOfferDto: CreateOfferDto, user: User): Promise<Offer>;
    findOne(id: number): Promise<Offer>;
    findAll(): Promise<Offer[]>;
}
