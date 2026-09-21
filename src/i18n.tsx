import React, { createContext, useContext } from 'react';

export type Language = 'en' | 'vi';

type Dictionary = Record<string, { en: string; vi: string }>;

const dictionary: Dictionary = {
  'nav.home': { en: 'Home', vi: 'Trang chủ' },
  'nav.tours': { en: 'Tours', vi: 'Tour' },
  'nav.destinations': { en: 'Destinations', vi: 'Điểm đến' },
  'nav.deals': { en: 'Deals', vi: 'Ưu đãi' },
  'nav.about': { en: 'About', vi: 'Giới thiệu' },
  'nav.blog': { en: 'Blog', vi: 'Blog' },
  'nav.contact': { en: 'Contact', vi: 'Liên hệ' },
  'nav.brandSub': { en: 'Travel Vietnam & Beyond', vi: 'Du lịch Việt Nam & Thế giới' },
  'nav.bookTour': { en: 'Book Tour', vi: 'Đặt tour' },
  'nav.bookShort': { en: 'Book', vi: 'Đặt tour' },
  'nav.privateConsult': { en: 'Book a Private Consultation', vi: 'Đặt tư vấn riêng' },
  'nav.hotline': { en: 'Hotline 24/7: 1900 888 999', vi: 'Hotline 24/7: 1900 888 999' },

  'hero.badge': { en: 'The Art of Travel | English', vi: 'Nghệ thuật du lịch | Tiếng Việt' },
  'hero.title': { en: 'Discover The World', vi: 'Khám phá thế giới' },
  'hero.titleAccent': { en: 'With Golden Trip', vi: 'Cùng Golden Trip' },
  'hero.subtitle': {
    en: 'Memorable journeys begin with one thoughtful step. Golden Trip creates refined, luminous travel experiences that speak to every traveler with care.',
    vi: 'Những hành trình đáng nhớ bắt đầu từ một bước chân đầy cảm hứng. Golden Trip kiến tạo trải nghiệm du lịch tinh tế, sáng rõ và chạm đến cảm xúc của từng người du hành.',
  },
  'hero.explore': { en: 'Explore journeys', vi: 'Khám phá hành trình' },
  'hero.viewTours': { en: 'View all tours', vi: 'Xem tất cả tour' },
  'hero.rating': { en: '4.98 / 5.0 (2,500+ happy travelers)', vi: '4.98 / 5.0 (2.500+ khách hài lòng)' },
  'hero.selectedJourneys': { en: 'Selected journeys worldwide', vi: 'Hành trình chọn lọc toàn cầu' },
  'hero.concierge': { en: 'Travel concierge companion', vi: 'Quản gia du lịch đồng hành' },

  'search.destinationLabel': { en: 'Where would you like to go?', vi: 'Bạn muốn đi đâu?' },
  'search.destinationPlaceholder': { en: 'Ha Long, Phu Quoc, Tokyo, Paris...', vi: 'Hạ Long, Phú Quốc, Tokyo, Paris...' },
  'search.dateLabel': { en: 'Departure date', vi: 'Ngày khởi hành' },
  'search.guestsLabel': { en: 'Guests', vi: 'Số người' },
  'search.adults': { en: 'Adults', vi: 'Người lớn' },
  'search.children': { en: 'Children', vi: 'Trẻ em' },
  'search.adultsAge': { en: 'Age 12 and above', vi: 'Từ 12 tuổi trở lên' },
  'search.childrenAge': { en: 'Under 12 years old', vi: 'Dưới 12 tuổi' },
  'search.budgetLabel': { en: 'Maximum budget', vi: 'Ngân sách tối đa' },
  'search.quickHint': { en: 'Quick ideas:', vi: 'Gợi ý tìm nhanh:' },
  'search.submit': { en: 'Search tours', vi: 'Tìm kiếm tour' },
  'search.confirm': { en: 'Confirm', vi: 'Xác nhận' },
  'search.million': { en: 'million', vi: 'triệu' },

  'deals.badge': { en: 'Golden autumn exclusive 2024', vi: 'Đặc quyền mùa thu vàng 2024' },
  'deals.title': { en: 'Golden Deals', vi: 'Golden Deals' },
  'deals.titleAccent': { en: 'Travel Offers', vi: 'Ưu đãi mùa du lịch' },
  'deals.desc': {
    en: 'Save up to 30% on selected premium journeys. Enjoy five-star stays, limousine transfers, and relaxing spa experiences.',
    vi: 'Giảm đến 30% cho các hành trình du lịch cao cấp được chọn lọc. Tận hưởng kỳ nghỉ 5 sao, tặng kèm dịch vụ đưa đón Limousine và liệu trình spa thư giãn.',
  },
  'deals.save': { en: 'Save up to 15,000,000 VND', vi: 'Tiết kiệm đến 15.000.000 đ' },
  'deals.gift': { en: 'Fine Dining dinner included', vi: 'Tặng bữa tối Fine Dining' },
  'deals.limited': { en: 'Limited to 20 seats', vi: 'Số lượng giới hạn 20 suất' },
  'deals.cta': { en: 'Explore offers now', vi: 'Khám phá ưu đãi ngay' },
  'deals.countdown': { en: 'Offer ends in', vi: 'Thời gian ưu đãi còn lại' },
  'deals.countdownSub': { en: 'The campaign ends when the timer reaches zero', vi: 'Chương trình kết thúc khi đồng hồ về 0' },
  'deals.code': { en: 'Offer code:', vi: 'Mã ưu đãi áp dụng:' },
  'time.days': { en: 'Days', vi: 'Ngày' },
  'time.hours': { en: 'Hours', vi: 'Giờ' },
  'time.minutes': { en: 'Minutes', vi: 'Phút' },
  'time.seconds': { en: 'Seconds', vi: 'Giây' },

  'tours.eyebrow': { en: 'Five-star journey collection', vi: 'Tuyển tập hành trình 5 sao' },
  'tours.title': { en: 'Explore Curated', vi: 'Khám phá các chuyến đi' },
  'tours.titleAccent': { en: 'Premium Journeys', vi: 'Đẳng cấp thượng lưu' },
  'tours.desc': {
    en: 'Choose from 100+ premium domestic and international tours designed for unforgettable travel experiences.',
    vi: 'Chọn lựa trong hơn 100+ tour du lịch cao cấp trong nước và quốc tế, thiết kế riêng cho những trải nghiệm khó quên.',
  },
  'tours.searchPlaceholder': { en: 'Search destination or tour name...', vi: 'Tìm kiếm điểm đến, tên tour...' },
  'tours.filters': { en: 'Filters', vi: 'Bộ lọc' },
  'tours.sortFeatured': { en: 'Sort: Featured', vi: 'Sắp xếp: Nổi bật nhất' },
  'tours.sortPriceAsc': { en: 'Price: Low → High', vi: 'Giá: Thấp → Cao' },
  'tours.sortPriceDesc': { en: 'Price: High → Low', vi: 'Giá: Cao → Thấp' },
  'tours.sortRating': { en: 'Highest rated', vi: 'Đánh giá cao nhất' },
  'tours.showing': { en: 'Showing', vi: 'Hiển thị' },
  'tours.results': { en: 'matching journeys', vi: 'hành trình phù hợp' },
  'tours.from': { en: 'From', vi: 'Giá từ' },
  'tours.details': { en: 'View details', vi: 'Xem chi tiết' },

  'dest.eyebrow': { en: 'World Class Destinations', vi: 'Điểm đến đẳng cấp thế giới' },
  'dest.title': { en: 'Explore The World’s', vi: 'Khám phá các điểm đến' },
  'dest.titleAccent': { en: 'Most Beloved Places', vi: 'Được yêu thích nhất' },
  'dest.desc': {
    en: 'Every destination is selected by Golden Trip for its beauty, comfort, and unforgettable experiences.',
    vi: 'Mỗi điểm đến là một thiên đường nghỉ dưỡng và khám phá được Golden Trip tuyển chọn với tiêu chuẩn khắt khe nhất.',
  },
  'dest.search': { en: 'Search destinations...', vi: 'Tìm điểm đến...' },
  'common.all': { en: 'All', vi: 'Tất cả' },
  'common.vietnam': { en: 'Vietnam', vi: 'Việt Nam' },
  'common.asia': { en: 'Asia', vi: 'Châu Á' },
  'common.europe': { en: 'Europe', vi: 'Châu Âu' },

  'about.eyebrow': { en: 'About Golden Trip Travel', vi: 'Về Golden Trip Travel' },
  'about.title': { en: 'About Golden Trip Travel', vi: 'Về Golden Trip Travel' },
  'about.titleAccent': { en: 'Designing Elevated Journeys', vi: 'Kiến tạo hành trình thượng lưu' },
  'blog.eyebrow': { en: 'Stories & Inspirations', vi: 'Câu chuyện & cảm hứng' },
  'blog.title': { en: 'Travel Guides', vi: 'Cẩm nang & câu chuyện' },
  'blog.titleAccent': { en: 'For Inspired Travelers', vi: 'Du lịch thượng lưu' },
  'contact.eyebrow': { en: '24/7 VIP Concierge', vi: 'Quản gia du lịch 24/7' },
  'contact.title': { en: 'Contact Us', vi: 'Liên hệ với chúng tôi' },
  'contact.titleAccent': { en: 'Plan Your Journey', vi: 'Đồng hành cùng hành trình của bạn' },

  'toast.searchTitle': { en: 'Searching for journeys...', vi: 'Đang tìm kiếm chuyến đi...' },
  'toast.searchDesc': { en: 'Destination', vi: 'Điểm đến' },
  'toast.all': { en: 'All', vi: 'Tất cả' },
  'toast.guests': { en: 'Adults', vi: 'người lớn' },
};

const I18nContext = createContext<{
  language: Language;
  t: (key: string) => string;
}>({
  language: 'en',
  t: (key) => key,
});

export const I18nProvider: React.FC<{
  language: Language;
  children: React.ReactNode;
}> = ({ language, children }) => {
  const t = (key: string) => dictionary[key]?.[language] ?? key;

  return (
    <I18nContext.Provider value={{ language, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
