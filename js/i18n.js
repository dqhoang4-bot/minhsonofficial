/* ===== MSTech i18n – Vietnamese / English ===== */
(function () {
  'use strict';

  var STORAGE_KEY = 'mstech-lang';
  var DEFAULT_LANG = 'vi';

  var translations = {
    vi: {
      'meta.title': 'MSTech – Công ty TNHH Công nghệ Minh Sơn',

      /* Header */
      'nav.overview': 'Tổng quan',
      'nav.vision': 'Tầm nhìn',
      'nav.solutions': 'Giải pháp',
      'nav.process': 'Quy trình',
      'nav.partners': 'Đối tác',
      'nav.contact': 'Liên hệ',

      /* Hero */
      'hero.title': 'Kiến tạo Hạ tầng<br /><span class="highlight">Vững vàng Tương lai số</span>',
      'hero.subtitle': 'Tư vấn – Cung cấp – Triển khai các giải pháp CNTT toàn diện cho doanh nghiệp Việt Nam.',
      'hero.ctaSolutions': 'Khám phá giải pháp',
      'hero.ctaContact': 'Liên hệ ngay',

      /* About */
      'about.label': 'Tổng quan công ty',
      'about.title': 'CÔNG TY TNHH<br />CÔNG NGHỆ MINH SƠN',
      'about.desc': 'Công ty TNHH Công nghệ Minh Sơn là đơn vị chuyên tư vấn, cung cấp thiết bị và triển khai hạ tầng công nghệ thông tin cho các tổ chức, doanh nghiệp trên toàn quốc. Tập trung vào mảng hạ tầng cốt lõi (<em>Core Infrastructure</em>) và an toàn dữ liệu, Minh Sơn cung cấp giải pháp trọn gói từ khâu thiết kế, cung cấp phần cứng, triển khai đến bảo hành, bảo trì chuyên nghiệp.',
      'about.brand': 'Thương hiệu: <strong>MSTech</strong>',
      'about.website': 'Website: <strong>mstc.com.vn</strong>',
      'about.hq': 'Trụ sở: Ngõ 101 Thanh Nhàn, Bạch Mai, Hà Nội',
      'about.office': 'Văn phòng giao dịch: Tầng 4, Tòa nhà Times Tower, Số 35 Lê Văn Lương, phường Thanh Xuân, thành phố Hà Nội, Việt Nam',
      'about.email': 'Email: minhson@mstc.com.vn',
      'about.hotline': 'Hotline: +84 24 85820978',
      'about.card1.title': 'Hạ tầng CNTT',
      'about.card1.desc': 'Thiết kế và triển khai hạ tầng máy chủ, lưu trữ, mạng chuẩn doanh nghiệp.',
      'about.card2.title': 'Bảo mật & An toàn dữ liệu',
      'about.card2.desc': 'Giải pháp bảo vệ dữ liệu toàn diện trước ransomware và thảm họa thiên nhiên.',
      'about.card3.title': 'Mạng & Kết nối',
      'about.card3.desc': 'Hạ tầng mạng LAN/WAN/Data Center hiệu năng cao, bảo mật từ core đến edge.',
      'about.card4.title': 'Disaster Recovery',
      'about.card4.desc': 'Quy hoạch và triển khai kịch bản DR đảm bảo RPO & RTO ở mức thấp nhất.',

      /* Vision */
      'vision.label': 'Định hướng chiến lược',
      'vision.title': 'Tầm nhìn – Sứ mệnh – Giá trị cốt lõi',
      'vision.vision.title': 'Tầm nhìn',
      'vision.vision.desc': 'Trở thành đơn vị tích hợp hệ thống và cung cấp dịch vụ hạ tầng CNTT uy tín, chuyên nghiệp hàng đầu tại Việt Nam.',
      'vision.mission.title': 'Sứ mệnh',
      'vision.mission.desc': 'Tối ưu hóa hạ tầng công nghệ, bảo vệ tài sản dữ liệu và đảm bảo tính liên tục trong hoạt động kinh doanh của Khách hàng bằng các giải pháp tiên tiến cùng dịch vụ kỹ thuật vượt trội.',
      'vision.values.title': 'Giá trị cốt lõi',
      'vision.value1': '<strong>Chuyên nghiệp:</strong> Chuẩn hóa quy trình từ tư vấn đến triển khai và hỗ trợ sau bán hàng.',
      'vision.value2': '<strong>Tin cậy:</strong> Luôn đồng hành, cam kết chất lượng sản phẩm chuẩn hãng và tiến độ công việc.',
      'vision.value3': '<strong>Tối ưu:</strong> Mang lại giải pháp phù hợp nhất với ngân sách và quy mô của từng khách hàng.',

      /* Solutions */
      'solutions.label': 'Năng lực kỹ thuật',
      'solutions.title': 'Giải pháp chuyên sâu',
      'solutions.desc': 'Minh Sơn sở hữu năng lực tư vấn, tích hợp và tối ưu hóa hạ tầng CNTT toàn diện, tập trung vào 3 lĩnh vực cốt lõi:',
      'solutions.tab1': 'Hạ tầng máy chủ & Lưu trữ',
      'solutions.tab2': 'Bảo vệ dữ liệu',
      'solutions.tab3': 'Mạng & Bảo mật',
      'solutions.t1c1': 'Triển khai kiến trúc lưu trữ khối (Block Storage) có độ sẵn sàng cao (High Availability), độ trễ cực thấp, hỗ trợ ảo hóa lưu trữ và tính năng sao chép dữ liệu đa điểm (Global Active Device – GAD).',
      'solutions.t1c2': 'Tối ưu hóa lưu trữ lai (Hybrid) và All-Flash Storage, khai thác tối đa công nghệ chống trùng lặp (Deduplication), nén dữ liệu (Compression) và sao lưu tức thời (Snapshot).',
      'solutions.t1c3': 'Cung cấp giải pháp máy chủ doanh nghiệp và hệ thống lưu trữ thông minh tích hợp AI (InfoSight), đáp ứng các tải công việc nặng như Database, ảo hóa VMware/Hyper-V.',
      'solutions.t1c4': 'Hạ tầng máy chủ và lưu trữ hiệu năng cao, đáp ứng điện toán hiệu năng cao (HPC) và các ứng dụng kinh doanh quan trọng.',
      'solutions.t1extra': '<strong>Tối ưu hóa & Mở rộng:</strong> Thiết kế kiến trúc dạng module dễ dàng nâng cấp linh hoạt (Scale-up & Scale-out), đảm bảo hệ thống duy trì hiệu năng 24/7 không gián đoạn (Zero Downtime).',
      'solutions.t2c1': 'Kiến trúc lưu trữ hạ tầng hợp nhất (Hyperconverged Secondary Storage), hỗ trợ bảo vệ dữ liệu chống biến đổi (Immutable Backups), phát hiện Ransomware dựa trên AI và khôi phục hàng loạt với tốc độ cao.',
      'solutions.t2c2': 'Tự động hóa quy trình sao lưu, kiểm tra tính toàn vẹn của bản backup (SureBackup) và khôi phục máy ảo/dữ liệu ngay tức thì (Instant Recovery) cho cả môi trường ảo hóa, Vật lý và Cloud.',
      'solutions.t2c3': 'Giải pháp quản trị dữ liệu quy mô lớn, sao lưu và tuân thủ chính sách an toàn thông tin (Compliance/Retention) cho toàn bộ tài nguyên doanh nghiệp.',
      'solutions.t2c4': 'Xây dựng kịch bản lập lịch sao lưu phân tầng (3-2-1-1-0 Rule), đồng bộ dữ liệu giữa các Trung tâm dữ liệu (DC – DR Site), đảm bảo chỉ số RPO và RTO ở mức thấp nhất.',
      'solutions.t3c1': 'Tư vấn và triển khai hệ thống mạng LAN/WAN/Data Center Network hiệu năng cao. Thiết kế kiến trúc Mạng mô hình đa tầng (Core – Aggregation – Access), tối ưu băng thông và độ sẵn sàng cao.',
      'solutions.t3c2': 'Triển khai các giải pháp tường lửa thế hệ mới (NGFW), áp dụng mô hình bảo mật Zero Trust Architecture. Bảo vệ nâng cao: IPS, Advanced Threat Prevention, lọc web, SSL VPN/SASE.',
      'solutions.t3c3': 'Giám sát hiệu năng mạng, máy chủ, ứng dụng và hạ tầng lưu trữ tập trung. Tự động cảnh báo sự cố theo thời gian thực (Real-time Alerting) và phân tích lưu lượng (Traffic Analysis).',
      'solutions.t3c4': 'Giải pháp phân tích, giám sát gói tin chuyên sâu (Deep Packet Inspection), đo đạc hiệu năng ứng dụng, bảo vệ chống tấn công từ chối dịch vụ (DDoS) và kiểm soát an toàn dữ liệu trên không gian mạng doanh nghiệp.',

      /* Process */
      'process.label': 'Quy trình dịch vụ',
      'process.title': 'Quy trình dịch vụ chuẩn hóa 5 bước',
      'process.desc': 'Đảm bảo các dự án triển khai đúng tiến độ và hệ thống vận hành ổn định lâu dài.',
      'process.step1.title': 'Khảo sát & Tư vấn',
      'process.step1.desc': 'Khảo sát hiện trạng hạ tầng phần cứng, mạng và phần mềm. Đánh giá dung lượng, hiệu năng và xác định điểm nghẽn (Bottlenecks) hoặc rủi ro an toàn thông tin. Tư vấn định hướng công nghệ phù hợp ngân sách.',
      'process.step2.title': 'Thiết kế phương án',
      'process.step2.desc': 'Lập bản vẽ kiến trúc hệ thống chi tiết (Topology Matrix, Storage Pool Configuration, Network & Zoning plan). Xây dựng kịch bản POC và Migration Plan không gây gián đoạn hoạt động.',
      'process.step3.title': 'Triển khai & Tích hợp',
      'process.step3.desc': 'Vận chuyển, lắp đặt phần cứng chuẩn kỹ thuật rack-mount. Cấu hình chi tiết Máy chủ, SAN/NAS Storage, SAN Switch, phần mềm Backup. Kiểm thử tải (Stress test) và Failover test.',
      'process.step4.title': 'Bàn giao & Đào tạo',
      'process.step4.desc': 'Bàn giao bộ hồ sơ kỹ thuật đầy đủ. Tổ chức các buổi đào tạo, chuyển giao công nghệ cho đội ngũ IT của khách hàng để làm chủ vận hành.',
      'process.step5.title': 'Bảo hành & Hỗ trợ 24/7',
      'process.step5.desc': 'Hỗ trợ đa kênh qua Hotline, Email. Ứng cứu từ xa (Remote Support) hoặc trực tiếp tại nơi lắp đặt (On-site). Bảo trì định kỳ, Health-check, cập nhật Firmware/Patch an toàn.',

      /* Partners */
      'partners.label': 'Đối tác chiến lược',
      'partners.title': 'Hợp tác với các thương hiệu hàng đầu thế giới',
      'partners.desc': 'Minh Sơn tự hào là đối tác hợp tác và triển khai các giải pháp công nghệ chính hãng từ các tập đoàn hàng đầu thế giới.',
      'partners.cat1': 'Lưu trữ & Bảo vệ dữ liệu',
      'partners.cat2': 'Mạng & Bảo mật',

      /* Contact */
      'contact.label': 'Thông tin liên hệ',
      'contact.title': 'Hãy để chúng tôi<br />đồng hành cùng bạn',
      'contact.desc': 'Quý khách hàng có nhu cầu tư vấn giải pháp hoặc báo giá, vui lòng liên hệ với chúng tôi qua các kênh dưới đây.',
      'contact.addressLabel': 'Địa chỉ',
      'contact.address': 'Ngõ 101 Thanh Nhàn, Phường Bạch Mai, TP. Hà Nội',
      'contact.emailLabel': 'Email',
      'contact.hotlineLabel': 'Hotline',
      'contact.websiteLabel': 'Website',
      'contact.officeLabel': 'Văn phòng giao dịch',
      'contact.office': 'Tầng 4, Tòa nhà Times Tower, Số 35 Lê Văn Lương, phường Thanh Xuân, thành phố Hà Nội, Việt Nam',

      /* Footer */
      'footer.tagline': 'Kiến tạo Hạ tầng – Vững vàng Tương lai số',
      'footer.services': 'Dịch vụ',
      'footer.company': 'Công ty',
      'footer.contact': 'Liên hệ',
      'footer.linkServerStorage': 'Hạ tầng máy chủ & Lưu trữ',
      'footer.linkDataProtection': 'Bảo vệ dữ liệu',
      'footer.linkNetworkSecurity': 'Mạng & Bảo mật',
      'footer.linkProcess': 'Quy trình dịch vụ',
      'footer.linkOverview': 'Tổng quan',
      'footer.linkVision': 'Tầm nhìn & Sứ mệnh',
      'footer.linkPartners': 'Đối tác chiến lược',
      'footer.linkContact': 'Liên hệ',
      'footer.address': 'Ngõ 101 Thanh Nhàn, Bạch Mai, Hà Nội',
      'footer.office': 'Văn phòng giao dịch: Tầng 4, Tòa nhà Times Tower, Số 35 Lê Văn Lương, phường Thanh Xuân, thành phố Hà Nội, Việt Nam',
      'footer.copyright': '© 2026 Công ty TNHH Công nghệ Minh Sơn (MSTech). All rights reserved.'
    },

    en: {
      'meta.title': 'MSTech – Minh Son Technology Co., Ltd',

      /* Header */
      'nav.overview': 'Overview',
      'nav.vision': 'Vision',
      'nav.solutions': 'Solutions',
      'nav.process': 'Process',
      'nav.partners': 'Partners',
      'nav.contact': 'Contact',

      /* Hero */
      'hero.title': 'Building the Infrastructure<br /><span class="highlight">for a Confident Digital Future</span>',
      'hero.subtitle': 'Consulting – Supply – Deployment of comprehensive IT solutions for Vietnamese enterprises.',
      'hero.ctaSolutions': 'Explore Solutions',
      'hero.ctaContact': 'Contact Us',

      /* About */
      'about.label': 'Company Overview',
      'about.title': 'MINH SON<br />TECHNOLOGY CO., LTD',
      'about.desc': 'Minh Son Technology Co., Ltd specializes in consulting, supplying equipment and deploying IT infrastructure for organizations and enterprises nationwide. With a focus on core infrastructure (<em>Core Infrastructure</em>) and data security, Minh Son delivers turnkey solutions covering design, hardware supply, deployment, and professional warranty and maintenance services.',
      'about.brand': 'Brand: <strong>MSTech</strong>',
      'about.website': 'Website: <strong>mstc.com.vn</strong>',
      'about.hq': 'Headquarters: Lane 101 Thanh Nhan, Bach Mai, Hanoi',
      'about.office': 'Transaction Office: 4th Floor, Times Tower, 35 Le Van Luong Street, Thanh Xuan Ward, Hanoi City, Vietnam',
      'about.email': 'Email: minhson@mstc.com.vn',
      'about.hotline': 'Hotline: +84 24 85820978',
      'about.card1.title': 'IT Infrastructure',
      'about.card1.desc': 'Design and deploy enterprise-grade server, storage and network infrastructure.',
      'about.card2.title': 'Security & Data Safety',
      'about.card2.desc': 'Comprehensive data protection against ransomware and natural disasters.',
      'about.card3.title': 'Network & Connectivity',
      'about.card3.desc': 'High-performance LAN/WAN/Data Center network infrastructure, secured from core to edge.',
      'about.card4.title': 'Disaster Recovery',
      'about.card4.desc': 'Plan and implement DR scenarios that ensure the lowest possible RPO & RTO.',

      /* Vision */
      'vision.label': 'Strategic Direction',
      'vision.title': 'Vision – Mission – Core Values',
      'vision.vision.title': 'Vision',
      'vision.vision.desc': "To become one of Vietnam's most reputable and professional system integrators and IT infrastructure service providers.",
      'vision.mission.title': 'Mission',
      'vision.mission.desc': 'To optimize technology infrastructure, protect data assets and ensure business continuity for our customers through advanced solutions and outstanding technical services.',
      'vision.values.title': 'Core Values',
      'vision.value1': '<strong>Professionalism:</strong> Standardized processes from consulting and deployment to after-sales support.',
      'vision.value2': '<strong>Reliability:</strong> Always by your side, committed to genuine product quality and project timelines.',
      'vision.value3': '<strong>Optimization:</strong> Delivering the solution that best fits each customer\'s budget and scale.',

      /* Solutions */
      'solutions.label': 'Technical Capabilities',
      'solutions.title': 'In-depth Solutions',
      'solutions.desc': 'Minh Son has the capability to consult, integrate and optimize comprehensive IT infrastructure, focusing on three core areas:',
      'solutions.tab1': 'Server & Storage Infrastructure',
      'solutions.tab2': 'Data Protection',
      'solutions.tab3': 'Network & Security',
      'solutions.t1c1': 'Deploying High Availability block storage architectures with ultra-low latency, storage virtualization and multi-site data replication (Global Active Device – GAD).',
      'solutions.t1c2': 'Optimizing hybrid and All-Flash storage, maximizing Deduplication, Compression and instant Snapshot technologies.',
      'solutions.t1c3': 'Providing enterprise servers and AI-driven intelligent storage systems (InfoSight) for heavy workloads such as databases and VMware/Hyper-V virtualization.',
      'solutions.t1c4': 'High-performance server and storage infrastructure for HPC and mission-critical business applications.',
      'solutions.t1extra': '<strong>Optimization & Scalability:</strong> Modular architecture that scales easily (Scale-up & Scale-out), keeping systems running 24/7 without interruption (Zero Downtime).',
      'solutions.t2c1': 'Hyperconverged secondary storage architecture supporting Immutable Backups, AI-based ransomware detection and high-speed mass recovery.',
      'solutions.t2c2': 'Automating backup workflows, verifying backup integrity (SureBackup) and enabling Instant Recovery of VMs/data across virtual, physical and cloud environments.',
      'solutions.t2c3': 'Large-scale data management, backup and compliance/retention policy enforcement for all enterprise resources.',
      'solutions.t2c4': 'Building tiered backup schedules (3-2-1-1-0 Rule), synchronizing data between data centers (DC – DR Site), ensuring the lowest RPO and RTO.',
      'solutions.t3c1': 'Consulting and deploying high-performance LAN/WAN/Data Center networks. Designing multi-tier network architecture (Core – Aggregation – Access) with optimized bandwidth and high availability.',
      'solutions.t3c2': 'Deploying next-generation firewalls (NGFW) based on Zero Trust Architecture. Advanced protection: IPS, Advanced Threat Prevention, web filtering, SSL VPN/SASE.',
      'solutions.t3c3': 'Centralized monitoring of network, server, application and storage performance. Real-time alerting and traffic analysis.',
      'solutions.t3c4': 'In-depth packet analysis and monitoring (Deep Packet Inspection), application performance measurement, DDoS protection and data security control across the enterprise network.',

      /* Process */
      'process.label': 'Service Process',
      'process.title': 'Standardized 5-Step Service Process',
      'process.desc': 'Ensuring projects are delivered on schedule and systems operate reliably in the long run.',
      'process.step1.title': 'Survey & Consulting',
      'process.step1.desc': 'Assess the current state of hardware, network and software infrastructure. Evaluate capacity and performance, identify bottlenecks or information security risks, and recommend technology directions that fit the budget.',
      'process.step2.title': 'Solution Design',
      'process.step2.desc': 'Create detailed system architecture drawings (Topology Matrix, Storage Pool Configuration, Network & Zoning plan). Build POC and Migration plans that avoid operational disruption.',
      'process.step3.title': 'Deployment & Integration',
      'process.step3.desc': 'Transport and install rack-mount hardware to technical standards. Configure servers, SAN/NAS storage, SAN switches and backup software. Perform stress tests and failover tests.',
      'process.step4.title': 'Handover & Training',
      'process.step4.desc': "Hand over complete technical documentation. Organize training and technology transfer sessions so the customer's IT team can confidently operate the system.",
      'process.step5.title': 'Warranty & 24/7 Support',
      'process.step5.desc': 'Multi-channel support via Hotline and Email. Remote support or on-site assistance. Periodic maintenance, health checks and safe firmware/patch updates.',

      /* Partners */
      'partners.label': 'Strategic Partners',
      'partners.title': 'Partnering with World-Leading Brands',
      'partners.desc': "Minh Son is proud to partner with and deploy genuine technology solutions from the world's leading corporations.",
      'partners.cat1': 'Storage & Data Protection',
      'partners.cat2': 'Network & Security',

      /* Contact */
      'contact.label': 'Contact Information',
      'contact.title': 'Let Us<br />Walk With You',
      'contact.desc': 'If you need solution consulting or a quotation, please contact us through the channels below.',
      'contact.addressLabel': 'Address',
      'contact.address': 'Lane 101 Thanh Nhan, Bach Mai Ward, Hanoi City',
      'contact.emailLabel': 'Email',
      'contact.hotlineLabel': 'Hotline',
      'contact.websiteLabel': 'Website',
      'contact.officeLabel': 'Transaction Office',
      'contact.office': '4th Floor, Times Tower, 35 Le Van Luong Street, Thanh Xuan Ward, Hanoi City, Vietnam',

      /* Footer */
      'footer.tagline': 'Building Infrastructure – Confidently Into the Digital Future',
      'footer.services': 'Services',
      'footer.company': 'Company',
      'footer.contact': 'Contact',
      'footer.linkServerStorage': 'Server & Storage Infrastructure',
      'footer.linkDataProtection': 'Data Protection',
      'footer.linkNetworkSecurity': 'Network & Security',
      'footer.linkProcess': 'Service Process',
      'footer.linkOverview': 'Overview',
      'footer.linkVision': 'Vision & Mission',
      'footer.linkPartners': 'Strategic Partners',
      'footer.linkContact': 'Contact',
      'footer.address': 'Lane 101 Thanh Nhan, Bach Mai, Hanoi',
      'footer.office': 'Transaction Office: 4th Floor, Times Tower, 35 Le Van Luong Street, Thanh Xuan Ward, Hanoi City, Vietnam',
      'footer.copyright': '© 2026 Minh Son Technology Co., Ltd (MSTech). All rights reserved.'
    }
  };

  function applyLang(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n-html')];
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    if (dict['meta.title']) document.title = dict['meta.title'];
  }

  function init() {
    var lang = DEFAULT_LANG;
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) lang = saved;
    } catch (e) { /* localStorage unavailable */ }

    applyLang(lang);

    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = btn.getAttribute('data-lang');
        if (!translations[next] || next === document.documentElement.lang) return;
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
        applyLang(next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
