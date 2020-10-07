    export interface Category {
        id: number;
        name: string;
        structure: string[];
        url: string;
    }

    export interface Deal {
        applied_date: Date;
        discount_price: number;
        expired_date: Date;
        original_price: number;
        percentage: number;
    }

    export interface Images {
        large_urls: string[];
        small_urls: string[];
    }

    export interface Rating {
        average_rate: number;
        user_count: number;
    }

    export interface Shipping {
        force_insurance: boolean;
        free_shipping_coverage: number[];
    }

    export interface Sla {
        type: string;
        value: number;
    }

    export interface Specs {
    }

    export interface Stats {
        interest_count: number;
        sold_count: number;
        view_count: number;
        waiting_payment_count: number;
    }

    export interface Address {
        city: string;
        province: string;
    }

    export interface Closing {
        closed: boolean;
    }

    export interface HeaderImage {
        url: string;
    }

    export interface Inactivity {
        inactive: boolean;
        last_appear_at: Date;
    }

    export interface LastOrderSchedule {
        friday: string;
        monday: string;
        saturday: string;
        thursday: string;
        tuesday: string;
        wednesday: string;
    }

    export interface Level {
        image_url: string;
        name: string;
    }

    export interface Rejection {
        recent_transactions: number;
        rejected: number;
    }

    export interface Reviews {
        negative: number;
        positive: number;
    }

    export interface Sla2 {
        type: string;
        value: number;
    }

    export interface Store {
        address: Address;
        alert: string;
        avatar_url: string;
        brand_seller: boolean;
        carriers: string[];
        closing: Closing;
        delivery_time: string;
        description: string;
        flagship: boolean;
        groups: any[];
        header_image: HeaderImage;
        id: number;
        inactivity: Inactivity;
        last_order_schedule: LastOrderSchedule;
        level: Level;
        name: string;
        premium_level: string;
        premium_top_seller: boolean;
        rejection: Rejection;
        reviews: Reviews;
        sla: Sla2;
        subscriber_amount: number;
        term_and_condition: string;
        url: string;
    }

    export interface Warranty {
        cheapest: boolean;
    }

    export interface Product {
        active: boolean;
        assurance: boolean;
        available_countries: any[];
        category: Category;
        condition: string;
        created_at: Date;
        deal: Deal;
        default_catalog?: any;
        description: string;
        digital_product: boolean;
        for_sale: boolean;
        id: string;
        images: Images;
        imported: boolean;
        installments: any[];
        max_quantity: number;
        min_quantity: number;
        name: string;
        price: number;
        product_sin: any[];
        rating: Rating;
        relisted_at: Date;
        rush_delivery: boolean;
        shipping: Shipping;
        sku_id: number;
        sla: Sla;
        special_campaign_id: number;
        specs: Specs;
        state: string;
        state_description: any[];
        stats: Stats;
        stock: number;
        store: Store;
        tag_pages: any[];
        updated_at: Date;
        url: string;
        video_url: string;
        warranty: Warranty;
        weight: number;
        wholesales: any[];
        without_shipping: boolean;
    }
