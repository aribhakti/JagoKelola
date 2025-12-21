import { 
  LayoutDashboard, 
  Users, 
  Calculator, 
  Briefcase, 
  FolderKanban, 
  ShoppingCart, 
  Store, 
  HeadphonesIcon,
  AlertCircle,
  TrendingUp,
  ShieldCheck,
  Coffee,
  ShoppingBag,
  Shirt,
  Zap,
  CreditCard,
  WifiOff,
  Split,
  Receipt,
  Map,
  Boxes,
  ClipboardCheck,
  ArrowRightLeft,
  Bell,
  ChefHat,
  Truck,
  BookOpen,
  PieChart,
  Wallet,
  Landmark,
  FileSpreadsheet,
  ScanFace,
  Trophy,
  CalendarClock,
  Gift,
  Tags,
  Database,
  Video,
  MessageSquare,
  FileText,
  Clock,
  Bug,
  Calendar,
  Target,
  UserPlus,
  GraduationCap,
  Award,
  Settings,
  BarChart3,
  Globe,
  Smartphone
} from 'lucide-react';
import { PricingTier, PainPoint, Industry } from './types';

// Icons mapping for the dynamic features component
export const FEATURE_ICONS: Record<string, any> = {
  // POS
  fast_checkout: Zap,
  multi_payment: CreditCard,
  table_management: Map,
  offline_mode: WifiOff,
  split_bill: Split,
  digital_receipt: Receipt,
  
  // Inventory
  multi_warehouse: Boxes,
  stock_opname: ClipboardCheck,
  stock_transfer: ArrowRightLeft,
  low_stock: Bell,
  raw_materials: ChefHat,
  supplier: Truck,

  // Finance
  auto_journal: BookOpen,
  realtime_pnl: PieChart,
  expense: Wallet,
  cash_flow: TrendingUp,
  tax: Landmark,
  reconciliation: FileSpreadsheet,
  budget: Calculator,
  invoice: FileText,

  // HRM
  attendance: ScanFace,
  payroll: Trophy,
  shift: CalendarClock,
  recruitment: UserPlus,
  training: GraduationCap,
  performance: Award,
  leave: Calendar,

  // CRM
  leads: Users,
  deals: Target,
  contract: FileText,
  customer_db: Database,
  messenger: MessageSquare,
  
  // Project
  project_mgmt: FolderKanban,
  tasks: Briefcase,
  timesheet: Clock,
  bug_tracker: Bug,
  
  // Support & System
  zoom: Video,
  settings: Settings,
  reports: BarChart3,
  mobile: Smartphone
};

export const PAIN_POINTS: PainPoint[] = [
  {
    problem: "Stok Barang Sering Selisih?",
    solution: "Sistem inventory JagoKelola melacak setiap barang keluar-masuk secara real-time, meminimalisir kecurangan dan kesalahan hitung.",
    icon: AlertCircle
  },
  {
    problem: "Laporan Keuangan Berantakan?",
    solution: "Lupakan pembukuan manual. Dapatkan laporan Laba Rugi dan Neraca otomatis setiap kali ada transaksi.",
    icon: TrendingUp
  },
  {
    problem: "Sulit Pantau Karyawan?",
    solution: "Fitur HRM dan Absensi membantu Anda memantau kinerja dan kehadiran karyawan dari mana saja.",
    icon: ShieldCheck
  }
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Food & Beverage",
    description: "Kafe, Restoran, Coffee Shop",
    icon: Coffee
  },
  {
    name: "Retail",
    description: "Minimarket, Toko Kelontong, Toserba",
    icon: ShoppingBag
  },
  {
    name: "Fashion",
    description: "Butik, Distro, Toko Pakaian",
    icon: Shirt
  }
];

export const PRICING: PricingTier[] = [
  {
    name: 'Basic',
    price: 'Rp59.000',
    unit: 'Per outlet/bulan',
    description: 'Package that support basic business operations',
    features: ['POS System', 'Basic Inventory', 'Laporan Penjualan', '1 User Admin'],
    recommended: false,
  },
  {
    name: 'Pro',
    price: 'Rp199.000',
    unit: 'Per outlet/bulan',
    description: 'Package with complete features that support your business efficiency',
    features: ['Full ERP Features', 'Akuntansi Otomatis', 'Manajemen Karyawan', 'Multi-Gudang', 'Priority Support'],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Rp599.000',
    unit: 'Per outlet/bulan',
    description: 'The leading package that supports your business to a higher level',
    features: ['Unlimited Users', 'Custom Development', 'Dedicated Manager', 'API Access', 'On-premise Option'],
    recommended: false,
  },
];