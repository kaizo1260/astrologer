import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { MysticButton } from "@/components/ui/MysticButton";

const features = [
  {
    icon: "♈",
    title: "Lá Số Tử Vi",
    description: "Khám phá bản đồ vũ trụ lúc bạn sinh ra. Hiểu rõ tính cách, sự nghiệp và tình yêu.",
    href: "/birth-chart",
  },
  {
    icon: "♾",
    title: "Hợp Tuổi",
    description: "So sánh hai người để tìm hiểu mức độ tương hợp tình cảm, trí tuệ và tinh thần.",
    href: "/compatibility",
  },
  {
    icon: "🌙",
    title: "Pha Mặt Trăng",
    description: "Khám phá pha mặt trăng hiện tại và tác động của nó đến cuộc sống của bạn.",
    href: "/moon-phase",
  },
  {
    icon: "⭐",
    title: "Hành Tinh Hiện Tại",
    description: "Xem những hành tinh đang tác động đến cung hoàng đạo của bạn ngay bây giờ.",
    href: "/transit",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen py-16 px-4">
      {/* Hero Section */}
      <SectionHeader
        icon="✨"
        title="Khám Phá Vũ Trụ Của Bạn"
        subtitle="Chiêm tinh học hiện đại kết hợp với khoa học để giúp bạn hiểu rõ hơn về bản thân"
      />

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
        {features.map((feature) => (
          <GlowCard key={feature.href}>
            <div className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h2 className="font-mystical text-2xl font-bold text-cosmic-gold mb-3">
                {feature.title}
              </h2>
              <p className="text-cosmic-muted mb-6">{feature.description}</p>
              <Link href={feature.href}>
                <MysticButton className="w-full">
                  Khám Phá Ngay →
                </MysticButton>
              </Link>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Info Section */}
      <GlowCard className="max-w-3xl mx-auto">
        <div className="text-center">
          <h3 className="font-mystical text-2xl font-bold text-cosmic-gold mb-4">
            Về Chiêm Tinh Học
          </h3>
          <p className="text-cosmic-text leading-relaxed mb-4">
            Chiêm tinh học là nghệ thuật và khoa học nghiên cứu ảnh hưởng của các thiên thể
            đối với cuộc sống con người. Thông qua bản đồ sao cá nhân, chúng tôi giúp bạn
            khám phá những tiềm năng ẩn dấu và hướng dẫn bạn trên con đường sự nghiệp, tình cảm
            và phát triển bản thân.
          </p>
          <p className="text-cosmic-muted text-sm">
            ⭐ Dữ liệu được cung cấp bởi Astrologer API v5, sử dụng tính toán chính xác từ
            Swiss Ephemeris.
          </p>
        </div>
      </GlowCard>
    </div>
  );
}
