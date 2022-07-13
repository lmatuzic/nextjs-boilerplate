import { PurchaseItemType } from '../enums/PurchaseItemType';

export interface Book {
	id: string;
	title: string;
	purchaseItemType: PurchaseItemType;
	price: number;
	currency: string;
	author: string;
	publicationYear: number;
	publisher: string;
	shop: string;
}
