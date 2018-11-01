import {fakeFetch} from './fakeFetcher';
import categoriesJson from './data/categories';
import eventsJson from './data/events';
import listingsJson from './data/listings';

export const getCategories = () => fakeFetch('/categories', categoriesJson);

export const getEvents = categorySlug => fakeFetch(`categories/${categorySlug}`, eventsJson(categorySlug));

export const getListings = eventSlug => fakeFetch(`/events/${eventSlug}/listings`, listingsJson(eventSlug));
