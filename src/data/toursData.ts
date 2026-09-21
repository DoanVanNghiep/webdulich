import { Tour } from '../types';

export const TOURS_DATA: Tour[] = [
  {
    id: 'tour-ha-long-ninh-binh',
    title: 'Hạ Long – Ninh Bình: Tuyệt Tác Di Sản Kỳ Vĩ',
    subtitle: 'Nghỉ dưỡng du thuyền 5 sao vịnh Hạ Long và khám phá Tràng An non nước hữu tình',
    destination: 'Hạ Long, Ninh Bình',
    country: 'Việt Nam',
    region: 'Vietnam',
    duration: '3 ngày 2 đêm',
    days: 3,
    price: 4890000,
    originalPrice: 6200000,
    rating: 4.95,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    bestSeller: true,
    tourType: 'Nghỉ dưỡng',
    groupSize: 'Tối đa 16 khách VIP',
    departure: 'Khởi hành hàng ngày từ Hà Nội',
    highlights: [
      '1 đêm trên Siêu Du Thuyền 5 sao President Cruise với ban công riêng hướng vịnh',
      'Chèo thuyền kayak giữa làng chài Cửa Vạn và thăm hang Sửng Sốt huyền thoại',
      'Tiệc Sunset Party ngắm hoàng hôn vịnh Hạ Long với rượu vang & canape thượng hạng',
      'Thuyền nan ngắm Tràng An – Di sản kép thế giới, check-in Hang Múa ngoạn mục',
      'Thưởng thức ẩm thực fusion Bắc Bộ và hải sản tươi sống đánh bắt trong ngày'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hà Nội – Tuần Châu – Du Ngoạn Vịnh Hạ Long – Tiệc Hoàng Hôn',
        desc: 'Đón quý khách tại trung tâm Hà Nội bằng xe Limousine sang trọng. Đến bến Tuần Châu nhận phòng nghỉ dưỡng trên siêu du thuyền.',
        activities: [
          '08:30: Xe Limousine đón khách tại khách sạn trung tâm Hà Nội',
          '11:45: Check-in du thuyền 5 sao, thưởng thức welcome drink và nghe giới thiệu hải trình',
          '13:00: Dùng bữa trưa buffet hải sản thượng hạng khi du thuyền lướt qua Hòn Trống Mái',
          '15:30: Chèo kayak hoặc đò nan khám phá Hang Luồn và bãi biển Ti Tốp',
          '17:30: Sunset party trên sundeck, ngắm ánh hoàng hôn buông xuống mặt vịnh',
          '19:30: Bữa tối fine dining dưới ánh nến lãng mạn'
        ]
      },
      {
        day: 2,
        title: 'Hang Sửng Sốt – Về Cố Đô Hoa Lư – Thung Nham Resort',
        desc: 'Đón bình minh vịnh di sản với bài tập Tai Chi sảng khoái trên sundeck trước khi khởi hành về Ninh Bình.',
        activities: [
          '06:30: Tập Thái Cực Quyền (Tai Chi) ngắm bình minh trên vịnh',
          '07:30: Thăm hang Sửng Sốt – hang động kỳ vĩ nhất Hạ Long',
          '10:30: Du thuyền cập bến, xe đưa đoàn di chuyển về cố đô Ninh Bình',
          '14:00: Check-in resort sinh thái cao cấp nép mình bên rặng núi đá vôi',
          '16:00: Đạp xe ngắm hoàng hôn đồng lúa Tam Cốc thơ mộng'
        ]
      },
      {
        day: 3,
        title: 'Tràng An Bích Động – Đỉnh Hang Múa – Trở Về Hà Nội',
        desc: 'Hành trình xuôi thuyền trên dòng Sào Khê trong vắt và chinh phục 500 bậc đá Hang Múa ngắm trọn non nước.',
        activities: [
          '08:00: Đi thuyền nan xuyên qua 4 hang động kỳ ảo tại quần thể Tràng An',
          '11:00: Check-in đỉnh Hang Múa ngắm toàn cảnh thung lũng Tam Cốc từ trên cao',
          '12:30: Dùng bữa trưa đặc sản dê núi Ninh Bình tại nhà hàng sinh thái',
          '15:00: Xe Limousine đưa quý khách trở lại Hà Nội, kết thúc chuyến đi tuyệt vời'
        ]
      }
    ],
    included: [
      'Xe Limousine VIP khứ hồi Hà Nội – Hạ Long – Ninh Bình',
      '01 đêm phòng Suite ban công riêng trên du thuyền 5 sao',
      '01 đêm tại Resort boutique 5 sao Ninh Bình',
      'Tất cả các bữa ăn theo chuẩn Fine Dining và hải sản cao cấp',
      'Vé tham quan tất cả các điểm trong hành trình & thuyền Tràng An',
      'Hướng dẫn viên chuyên nghiệp, song ngữ tận tâm suốt tuyến',
      'Bảo hiểm du lịch cao cấp hạn mức 100.000.000 VNĐ'
    ],
    excluded: [
      'Đồ uống có cồn ngoài chương trình',
      'Dịch vụ massage & spa trên du thuyền',
      'Tiền tip cho thủy thủ đoàn và tài xế (tùy tâm)',
      'Chi tiêu cá nhân ngoài hành trình'
    ]
  },
  {
    id: 'tour-phu-quoc-luxury-sunset',
    title: 'Phú Quốc: Hoàng Hôn Thiên Đường & Nghỉ Dưỡng Thượng Lưu',
    subtitle: 'Nghỉ dưỡng tại Resort 5 sao view biển, cano riêng ngắm san hô 4 đảo và tiệc tối bãi biển',
    destination: 'Phú Quốc',
    country: 'Việt Nam',
    region: 'Vietnam',
    duration: '4 ngày 3 đêm',
    days: 4,
    price: 8950000,
    originalPrice: 11500000,
    rating: 4.98,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    bestSeller: true,
    tourType: 'Nghỉ dưỡng',
    groupSize: 'Nhóm gia đình / Cặp đôi',
    departure: 'Khởi hành từ TP.HCM / Hà Nội',
    highlights: [
      '03 đêm tại InterContinental hoặc JW Marriott Phu Quoc Emerald Bay',
      'Cano siêu tốc riêng tham quan Hòn Móng Tay, Hòn Mây Rút, lặn ngắm san hô',
      'Trải nghiệm cáp treo Hòn Thơm vượt biển dài nhất thế giới ngắm biển ngọc',
      'Tiệc tối BBQ hải sản riêng tư bên bờ cát trắng ngắm hoàng hôn tím trứ danh',
      'Flycam và nhiếp ảnh gia chuyên nghiệp ghi lại khoảnh khắc đáng nhớ'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chào Phú Quốc – Check-in Resort 5 Sao – Hoàng Hôn Sunset Sanato',
        desc: 'Xe đón riêng tại sân bay Phú Quốc, chào đón với nước dừa tươi và đưa về resort nhận villa hướng biển.',
        activities: [
          'Xe riêng đón tại sân bay Phú Quốc đưa về resort 5 sao',
          'Thưởng thức welcome drink và làm thủ tục check-in sớm',
          'Nghỉ ngơi, tắm hồ bơi vô cực hướng biển',
          'Chiều ngắm hoàng hôn Sunset Sanato nổi tiếng với những tác phẩm điêu khắc kỳ ảo',
          'Thưởng thức hải sản Hàm Ninh tại nhà hàng view biển'
        ]
      },
      {
        day: 2,
        title: 'Cano Siêu Tốc Riêng – Khám Phá Quần Đảo An Thới – Lặn San Hô',
        desc: 'Hành trình cano riêng rẽ sóng đưa bạn đến những hòn đảo hoang sơ nhất Nam đảo Phú Quốc.',
        activities: [
          '08:30: Cano cao tốc đón đoàn tại cảng An Thới',
          'Thăm Hòn Gầm Ghì – thiên đường san hô tự nhiên rực rỡ sắc màu',
          'Thư giãn tắm biển nước trong vắt tại Hòn Mây Rút Trong',
          'Chụp ảnh flycam và sup chèo trên làn nước ngọc bích',
          '17:00: Trở về bến cảng, thưởng thức tiệc nướng BBQ bãi biển'
        ]
      },
      {
        day: 3,
        title: 'Cáp Treo Hòn Thơm – Sunset Town Thị Trấn Hoàng Hôn',
        desc: 'Chiêm ngưỡng toàn cảnh biển đảo Phú Quốc từ trên cao và lạc bước vào phong cách Địa Trung Hải.',
        activities: [
          'Trải nghiệm cáp treo 3 dây vượt biển dài gần 8km',
          'Thỏa thích vui chơi tại công viên nước Aquatopia hiện đại',
          'Dạo bước tại Thị trấn Hoàng Hôn Sunset Town với kiến trúc châu Âu tráng lệ',
          'Xem show diễn đa phương tiện Kiss of The Sea với màn pháo hoa ngoạn mục'
        ]
      },
      {
        day: 4,
        title: 'Thư Giãn Spa Sáng – Mua Sắm Đặc Sản – Tạm Biệt Đảo Ngọc',
        desc: 'Thưởng thức bữa sáng nổi floating breakfast tại hồ bơi riêng, thư giãn trước khi tiễn sân bay.',
        activities: [
          'Floating breakfast tại hồ bơi riêng của villa',
          'Trải nghiệm liệu trình massage thư giãn tại Spa cao cấp',
          'Ghé thăm trang trại ngọc trai nước mặn và vườn tiêu truyền thống',
          'Xe riêng đưa quý khách ra sân bay Phú Quốc'
        ]
      }
    ],
    included: [
      'Vé máy bay khứ hồi kèm 20kg hành lý ký gửi',
      '03 đêm nghỉ dưỡng villa/resort 5 sao quốc tế',
      'Xe sang đón tiễn riêng tại sân bay và các điểm tham quan',
      'Cano du lịch riêng kèm thiết bị lặn biển & chụp ảnh Flycam',
      'Vé cáp treo Hòn Thơm 2 chiều & vé xem show nghệ thuật',
      'Các bữa ăn cao cấp theo lịch trình kèm tiệc nướng hải sản'
    ],
    excluded: [
      'Chi phí dịch vụ đi bộ dưới đáy biển Seawalker',
      'Chi tiêu cá nhân ngoài chương trình'
    ]
  },
  {
    id: 'tour-japan-golden-route',
    title: 'Nhật Bản: Cung Đường Vàng Tokyo – Núi Phú Sĩ – Kyoto – Osaka',
    subtitle: 'Hành trình chiêm ngưỡng vẻ đẹp tinh hoa xứ sở mặt trời mọc cùng trải nghiệm Onsen truyền thống',
    destination: 'Tokyo, Kyoto, Osaka',
    country: 'Nhật Bản',
    region: 'Asia',
    duration: '6 ngày 5 đêm',
    days: 6,
    price: 38900000,
    originalPrice: 43500000,
    rating: 4.97,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    bestSeller: true,
    tourType: 'Văn hóa',
    groupSize: 'Nhóm tinh hoa tối đa 15 khách',
    departure: 'Khởi hành từ Hà Nội / TP.HCM',
    highlights: [
      'Bay hàng không 5 sao All Nippon Airways hoặc Vietnam Airlines',
      'Nghỉ 1 đêm tại Ryokan truyền thống cao cấp, tắm suối khoáng nóng Onsen view Núi Phú Sĩ',
      'Trải nghiệm tàu siêu tốc Shinkansen vận tốc 300km/h ngắm cảnh sắc thiên nhiên',
      'Thưởng thức bò Kobe dát vàng hảo hạng và tiệc Kaiseki truyền thống Nhật Bản',
      'Trải nghiệm mặc Kimono dạo bước rừng trúc Sagano và đền Fushimi Inari 10.000 cổng Torii'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hà Nội/Sài Gòn – Tokyo – Tháp Tokyo Skytree – Ginza',
        desc: 'Hạ cánh sân bay Haneda, xe đưa đoàn tham quan thủ đô Tokyo hiện đại và khu phố mua sắm thượng lưu Ginza.',
        activities: [
          'Check-in khách sạn 5 sao trung tâm Tokyo',
          'Chiêm ngưỡng toàn cảnh thành phố từ đài quan sát Tokyo Skytree',
          'Dạo bước khu phố sầm uất Ginza và thưởng thức bữa tối Sushi omakase'
        ]
      },
      {
        day: 2,
        title: 'Chùa Asakusa Kannon – Hoàng Cung Tokyo – Núi Phú Sĩ',
        desc: 'Hành trình từ trung tâm văn hóa cổ Asakusa về chân ngọn núi thiêng Phú Sĩ.',
        activities: [
          'Thăm ngôi chùa cổ Asakusa và phố đi bộ Nakamise',
          'Chụp ảnh lưu niệm tại Quảng trường Hoàng cung Tokyo',
          'Di chuyển về khu vực hồ Kawaguchiko dưới chân núi Phú Sĩ',
          'Nhận phòng Ryokan, ngâm mình trong làn nước Onsen tự nhiên'
        ]
      },
      {
        day: 3,
        title: 'Làng Cổ Oshino Hakkai – Tàu Shinkansen Đến Cố Đô Kyoto',
        desc: 'Thưởng ngoạn cảnh sắc thanh bình của ngôi làng cổ dưới chân núi tuyết trước khi lên tàu siêu tốc về Kyoto.',
        activities: [
          'Dạo quanh 8 hồ nước trong vắt tan từ tuyết núi Phú Sĩ tại Oshino Hakkai',
          'Trải nghiệm tàu Shinkansen vận tốc 320km/h từ Nagoya về Kyoto',
          'Thăm đền Fushimi Inari với ngàn cổng Torii đỏ rực linh thiêng'
        ]
      },
      {
        day: 4,
        title: 'Cố Đô Kyoto – Rừng Trúc Arashiyama – Chùa Vàng Kinkakuji',
        desc: 'Đắm mình trong không gian thiền định của cố đô ngàn năm tuổi.',
        activities: [
          'Khoác lên mình bộ trang phục Kimono truyền thống Nhật Bản',
          'Thong thả tản bộ trong rừng trúc Arashiyama xanh biếc',
          'Chiêm ngưỡng Chùa Vàng Kinkakuji dát vàng óng ả soi bóng mặt hồ',
          'Thưởng thức trà đạo chuẩn phong cách quý tộc Nhật'
        ]
      },
      {
        day: 5,
        title: 'Lâu Đài Osaka – Phố Ẩm Thực Dotonbori – Thịt Bò Kobe',
        desc: 'Khám phá sự sôi động của Osaka và thưởng thức món bò Kobe trứ danh.',
        activities: [
          'Thăm quan Lâu đài Osaka uy nghiêm giữa công viên rợp bóng cây',
          'Tự do mua sắm tại Shinsaibashi và chụp ảnh biển hiệu Glico Man',
          'Bữa tối đỉnh cao với thực đơn bò Kobe A5 áp chảo Teppanyaki'
        ]
      },
      {
        day: 6,
        title: 'Osaka – Kansai – Bay Về Việt Nam',
        desc: 'Mua sắm quà lưu niệm tại sân bay quốc tế Kansai và bay về Việt Nam.',
        activities: [
          'Ăn sáng tại khách sạn, tự do dạo phố sáng sớm',
          'Xe đưa đoàn ra sân bay Kansai làm thủ tục xuất cảnh',
          'Về đến Việt Nam, hướng dẫn viên chia tay và hẹn gặp lại'
        ]
      }
    ],
    included: [
      'Vé máy bay khứ hồi quốc tế kèm 46kg hành lý ký gửi',
      'Toàn bộ khách sạn 4-5 sao trung tâm và 01 đêm Ryokan Onsen cao cấp',
      'Visa nhập cảnh Nhật Bản diện du lịch cao cấp',
      'Vé tàu Shinkansen chặng Shizuoka – Kyoto',
      'Các bữa ăn cao cấp: Bò Kobe A5, tiệc Kaiseki, Cua tuyết, Sushi Omakase',
      'Xe du lịch đời mới suốt hành trình tại Nhật Bản'
    ],
    excluded: [
      'Tiền bồi dưỡng cho lái xe và HDV (khoảng 8 USD/ngày/khách)',
      'Phí đổi ngày vé máy bay nếu khách muốn ở lại thêm'
    ]
  },
  {
    id: 'tour-europe-france-switzerland-italy',
    title: 'Châu Âu Hoàng Gia: Pháp – Thụy Sĩ – Ý – Vatican',
    subtitle: 'Du ngoạn kinh đô ánh sáng Paris, đỉnh núi tuyết Titlis hùng vĩ và thành Venice lãng mạn',
    destination: 'Paris, Lucerne, Venice, Rome',
    country: 'Pháp, Thụy Sĩ, Ý',
    region: 'Europe',
    duration: '10 ngày 9 đêm',
    days: 10,
    price: 86900000,
    originalPrice: 95000000,
    rating: 4.99,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    bestSeller: false,
    tourType: 'Khám phá',
    groupSize: 'Tối đa 18 khách cao cấp',
    departure: 'Khởi hành từ Hà Nội / TP.HCM',
    highlights: [
      'Bay hàng không 5 sao Qatar Airways hoặc Emirates',
      'Nghỉ dưỡng khách sạn 4–5 sao tiêu chuẩn châu Âu trung tâm các thành phố lớn',
      'Du thuyền trên dòng sông Seine ngắm tháp Eiffel lấp lánh về đêm',
      'Chinh phục đỉnh núi băng vĩnh cửu Titlis Thụy Sĩ bằng cáp xoay 360 độ Rotair',
      'Ngồi thuyền Gondola truyền thống xuôi dòng kênh đào lãng mạn thành Venice',
      'Khám phá đấu trường La Mã Colosseum và bảo tàng Vatican huyền thoại'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Việt Nam – Kinh Đô Ánh Sáng Paris',
        desc: 'Khởi hành chuyến bay đêm đến Paris. Đoàn hạ cánh tại sân bay Charles de Gaulle vào sáng hôm sau.',
        activities: ['Tập trung tại sân bay làm thủ tục', 'Nghỉ đêm trên máy bay hạng thương gia hoặc phổ thông đặc biệt']
      },
      {
        day: 2,
        title: 'Khám Phá Paris – Tháp Eiffel – Khải Hoàn Môn – Sông Seine',
        desc: 'Chào đón ngày mới tại thủ đô Paris hoa lệ.',
        activities: [
          'Chụp ảnh tại Tháp Eiffel, Khải Hoàn Môn Arc de Triomphe, Đại lộ Champs-Élysées',
          'Du thuyền sông Seine ngắm trọn các cây cầu lịch sử của Paris',
          'Dùng bữa tối phong cách Pháp với rượu vang Bordeaux'
        ]
      },
      {
        day: 3,
        title: 'Bảo Tàng Louvre – Cung Điện Versailles – Tàu Cao Tốc TGV Đến Thụy Sĩ',
        desc: 'Chiêm ngưỡng kiệt tác nàng Mona Lisa và cung điện xa hoa bậc nhất thế giới.',
        activities: [
          'Tham quan Bảo tàng Louvre với hàng ngàn hiện vật vô giá',
          'Thăm quan lâu đài tráng lệ Versailles',
          'Trải nghiệm tàu cao tốc TGV băng qua miền đồng quê đến Thụy Sĩ'
        ]
      },
      {
        day: 4,
        title: 'Lucerne Thơ Mộng – Cáp Treo Đỉnh Núi Tuyết Titlis',
        desc: 'Hành trình bước vào thế giới thần tiên của dãy Alps Thụy Sĩ.',
        activities: [
          'Dạo bước trên Cầu Gỗ Chapel cổ kính bên hồ Lucerne',
          'Lên đỉnh núi Titlis cao hơn 3.000m bằng cáp treo xoay 360 độ',
          'Đi bộ trên cây cầu treo băng tuyết cao nhất châu Âu Titlis Cliff Walk'
        ]
      },
      {
        day: 5,
        title: 'Thụy Sĩ – Kinh Đô Thời Trang Milan – Thành Phố Venice',
        desc: 'Vượt qua biên giới Thụy Sĩ – Ý đến với thánh đường thời trang Milan và thành phố nổi Venice.',
        activities: [
          'Thăm Quảng trường Duomo và Nhà thờ chính tòa Milan tráng lệ',
          'Di chuyển về Venice – thành phố tình yêu lãng mạn nhất thế giới',
          'Check-in khách sạn và dùng bữa tối mì Ý truyền thống'
        ]
      },
      {
        day: 6,
        title: 'Venice Cổ Kính – Đi Thuyền Gondola – Quảng Trường San Marco',
        desc: 'Trải nghiệm cuộc sống không khói xe độc nhất vô nhị trên các con kênh Venice.',
        activities: [
          'Đi tàu riêng ra đảo San Marco, ngắm Cung điện Doges và Cầu Than Thở',
          'Trải nghiệm thuyền Gondola lướt êm đềm trên làn nước ngọc bích',
          'Khám phá xưởng chế tác thủy tinh Murano truyền thống'
        ]
      },
      {
        day: 7,
        title: 'Venice – Florence Cố Đô Phục Hưng – Thành Rome',
        desc: 'Dừng chân tại Florence chiêm ngưỡng các tác phẩm điêu khắc vĩ đại thời Phục Hưng.',
        activities: [
          'Thăm cầu cổ Ponte Vecchio và nhà thờ Santa Maria del Fiore',
          'Khởi hành về Thủ đô Rome cổ kính'
        ]
      },
      {
        day: 8,
        title: 'Thành Rome – Đấu Trường Colosseum – Đài Phun Nước Trevi',
        desc: 'Lạc bước giữa những công trình La Mã cổ đại trường tồn cùng thời gian.',
        activities: [
          'Chụp ảnh tại Đấu trường Colosseum và Đồi Palatine',
          'Thả đồng xu ước nguyện tại đài phun nước Trevi nguy nga',
          'Thưởng thức kem Gelato truyền thống nước Ý'
        ]
      },
      {
        day: 9,
        title: 'Tòa Thánh Vatican – Bảo Tàng Mỹ Thuật – Bay Về Việt Nam',
        desc: 'Thăm quốc gia nhỏ nhất nhưng quyền lực tinh thần to lớn nhất thế giới.',
        activities: [
          'Viếng thăm Vương Cung Thánh Đường Thánh Phêrô (St. Peter\'s Basilica)',
          'Ngắm bức bích họa tuyệt tác của Michelangelo tại Nhà nguyện Sistine',
          'Xe đưa đoàn ra sân bay Rome làm thủ tục bay về Việt Nam'
        ]
      },
      {
        day: 10,
        title: 'Hạ Cánh Việt Nam – Kết Thúc Hành Trình Hoàng Gia',
        desc: 'Về đến sân bay Nội Bài / Tân Sơn Nhất. Chia tay đoàn và hẹn ngày tái ngộ.',
        activities: ['Đoàn về đến Việt Nam, kết thúc chuyến du lịch Châu Âu đáng nhớ']
      }
    ],
    included: [
      'Vé máy bay quốc tế khứ hồi hãng 5 sao',
      'Khách sạn 4-5 sao chuẩn quốc tế suốt hành trình kèm ăn sáng buffet',
      'Thủ tục visa Schengen châu Âu trọn gói tỉ lệ đậu cao',
      'Vé cáp treo Titlis, du thuyền Seine, thuyền Gondola Venice',
      'Vé vào cổng Louvre, Versailles, Đấu trường Colosseum, Tòa thánh Vatican',
      'Bảo hiểm du lịch quốc tế hạn mức 50.000 USD'
    ],
    excluded: [
      'Tiền tip cho hướng dẫn viên & lái xe châu Âu (8-10 Euro/ngày/khách)',
      'Hành lý quá cước và chi tiêu cá nhân'
    ]
  },
  {
    id: 'tour-da-nang-hoi-an-ba-na',
    title: 'Đà Nẵng – Cầu Vàng Bà Nà Hills – Phố Cổ Hội An',
    subtitle: 'Nghỉ dưỡng biển Mỹ Khê, dạo phố đèn lồng Hội An và thưởng ngoạn Cầu Vàng trên mây',
    destination: 'Đà Nẵng, Hội An',
    country: 'Việt Nam',
    region: 'Vietnam',
    duration: '3 ngày 2 đêm',
    days: 3,
    price: 3690000,
    originalPrice: 4500000,
    rating: 4.92,
    reviews: 168,
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    bestSeller: true,
    tourType: 'Gia đình',
    groupSize: 'Nhóm gia đình hoặc bạn bè',
    departure: 'Hàng ngày từ Hà Nội / TP.HCM / Hải Phòng',
    highlights: [
      'Nghỉ dưỡng tại khách sạn 5 sao mặt biển Mỹ Khê',
      'Vé cáp treo Bà Nà Hills và check-in Cầu Vàng Bàn Tay Khổng Lồ',
      'Trải nghiệm thả đèn hoa đăng lung linh trên dòng sông Hoài Hội An',
      'Thưởng thức ẩm thực miền Trung đặc sắc: Mì Quảng, Bê Thui Cầu Mống, Cao Lầu'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Đón Sân Bay Đà Nẵng – Bán Đảo Sơn Trà – Biển Mỹ Khê',
        desc: 'Xe đón khách tại sân bay Đà Nẵng, viếng Chùa Linh Ứng ngắm tượng Phật Bà nghìn mắt nghìn tay.',
        activities: ['Đón sân bay, check-in khách sạn 5 sao ven biển', 'Thăm Bán đảo Sơn Trà ngắm trọn vịnh Đà Nẵng', 'Tắm biển Mỹ Khê cát trắng mịn màng']
      },
      {
        day: 2,
        title: 'Bà Nà Hills Cầu Vàng – Làng Pháp – Phố Cổ Hội An',
        desc: 'Chạm tay vào mây trời tại Cầu Vàng và lạc bước trong không gian hoài niệm của phố cổ Hội An.',
        activities: ['Lên đỉnh Bà Nà chiêm ngưỡng Cầu Vàng trứ danh', 'Vui chơi tại Làng Pháp phong cách Trung Cổ', 'Tối dạo phố cổ Hội An, chèo thuyền thả hoa đăng']
      },
      {
        day: 3,
        title: 'Ngũ Hành Sơn – Làng Đá Non Nước – Mua Sắm Đặc Sản Tiễn Khách',
        desc: 'Khám phá các hang động linh thiêng tại Ngũ Hành Sơn trước khi tạm biệt thành phố đáng sống.',
        activities: ['Thăm Động Huyền Không và Làng đá mỹ nghệ Non Nước', 'Mua sắm đặc sản chả bò, mực rim me', 'Xe đưa ra sân bay Đà Nẵng']
      }
    ],
    included: [
      'Khách sạn 5 sao ven biển Mỹ Khê (2 khách/phòng)',
      'Xe du lịch đời mới đưa đón suốt hành trình',
      'Vé cáp treo Bà Nà Hills kèm buffet trưa cao cấp',
      'Thuyền hoa đăng Hội An và vé tham quan phố cổ',
      'Bảo hiểm du lịch trọn gói'
    ],
    excluded: ['Vé máy bay khứ hồi (hỗ trợ book giá đại lý)', 'Chi tiêu cá nhân ngoài tour']
  },
  {
    id: 'tour-bali-indonesia-luxury',
    title: 'Bali: Hòn Đảo Thiên Đường – Ubud – Cổng Trời Lempuyang',
    subtitle: 'Khám phá trái tim nghệ thuật Ubud, xích đu Bali Swing trên ruộng bậc thang và resort rừng nhiệt đới',
    destination: 'Bali, Ubud, Kuta',
    country: 'Indonesia',
    region: 'Asia',
    duration: '5 ngày 4 đêm',
    days: 5,
    price: 14500000,
    originalPrice: 17500000,
    rating: 4.96,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    bestSeller: false,
    tourType: 'Khám phá',
    groupSize: 'Nhóm riêng hoặc ghép đoàn VIP',
    departure: 'Khởi hành thứ 4 hàng tuần',
    highlights: [
      'Bay thẳng Vietjet Air hoặc Vietnam Airlines đến Denpasar Bali',
      'Nghỉ dưỡng villa có hồ bơi riêng tư tại thiên đường rừng nhiệt đới Ubud',
      'Check-in Cổng Trời Đền Lempuyang soi bóng ngọn núi lửa thiêng Agung',
      'Trải nghiệm Bali Swing bay trên những triền ruộng bậc thang Tegalalang ngút ngàn',
      'Thưởng thức hải sản bãi biển Jimbaran dưới ánh hoàng hôn lãng mạn'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hạ Cánh Bali – Đền Tanah Lot Giữa Sóng Biển',
        desc: 'Đến Bali, xe và hướng dẫn viên địa phương chào đón nồng nhiệt bằng vòng hoa sứ Frangipani.',
        activities: ['Đón sân bay Denpasar, di chuyển về nhận phòng khách sạn', 'Ngắm hoàng hôn tráng lệ tại Đền Tanah Lot nằm trên mỏm đá giữa biển', 'Bữa tối đón tiếp phong cách Indonesia']
      },
      {
        day: 2,
        title: 'Cổng Trời Lempuyang – Cung Điện Nước Tirta Gangga',
        desc: 'Chinh phục những địa điểm check-in mang tính biểu tượng nhất của Bali.',
        activities: ['Chụp ảnh tại Cổng Trời Đền Lempuyang huyền thoại', 'Dạo bước tại Cung điện nước Tirta Gangga với đàn cá Koi rực rỡ', 'Thưởng thức cà phê Chồn Kopi Luwak trứ danh']
      },
      {
        day: 3,
        title: 'Trái Tim Ubud – Ruộng Bậc Thang Tegalalang – Bali Swing',
        desc: 'Khám phá tinh hoa văn hóa Bali tại thị trấn nghệ thuật Ubud.',
        activities: ['Bay trên mây với trò chơi Bali Swing mạo hiểm và quyến rũ', 'Tắm nước thiêng thanh tẩy tâm hồn tại Đền Tampak Siring', 'Tự do dạo chợ nghệ thuật Ubud Art Market']
      },
      {
        day: 4,
        title: 'Nusa Penida – Sống Lưng Khủng Long Kelingking Beach',
        desc: 'Khởi hành tàu cao tốc ra đảo ngọc Nusa Penida chiêm ngưỡng kiệt tác thiên nhiên.',
        activities: ['Check-in mỏm đá sống lưng khủng long Kelingking Beach ngoạn mục', 'Tắm biển Broken Beach và hồ bơi tự nhiên Angel\'s Billabong', 'Chiều trở về đất liền, tiệc hải sản BBQ vịnh Jimbaran']
      },
      {
        day: 5,
        title: 'Mua Sắm Krishna – Tạm Biệt Bali',
        desc: 'Mua sắm quà lưu niệm tinh xảo của thổ dân và chuẩn bị bay về Việt Nam.',
        activities: ['Mua sắm tại trung tâm quà tặng Krishna', 'Xe đưa đoàn ra sân bay Denpasar đáp chuyến bay về lại Việt Nam']
      }
    ],
    included: [
      'Vé máy bay khứ hồi kèm 20kg ký gửi',
      'Khách sạn 4 sao cao cấp và Villa hồ bơi riêng biệt tại Ubud',
      'Toàn bộ xe riêng đưa đón và vé tham quan các điểm',
      'Tàu cao tốc khứ hồi đảo Nusa Penida',
      'Vé trải nghiệm Bali Swing trọn gói'
    ],
    excluded: ['Tiền tip tài xế địa phương (5 USD/ngày)', 'Chi phí cá nhân']
  }
];
