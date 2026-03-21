import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase';
import { BookOpen, FileText, Users, TrendingUp, Loader2 } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({ modules: 0, lessons: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'modules'));
        let modulesCount = 0;
        let lessonsCount = 0;

        querySnapshot.forEach((doc) => {
          modulesCount += 1;
          const data = doc.data();
          if (data.chapters) {
            lessonsCount += data.chapters.length; // كنجمعو عدد الدروس من الفهرس
          }
        });

        setStats({ modules: modulesCount, lessons: lessonsCount });
      } catch (error) {
        console.error("خطأ فجلب الإحصائيات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 hover:-translate-y-1 transition-transform">
      <div className={`p-4 rounded-xl ${color}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-slate-500 font-bold text-sm mb-1">{title}</h3>
        <p className="text-3xl font-black text-slate-800">{loading ? <Loader2 className="animate-spin" size={24}/> : value}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto font-tajawal dir-rtl">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-800 mb-2">مرحباً أمين! 👋</h1>
        <p className="text-slate-500 font-bold">نظرة عامة على منصة RR STUDENT اليوم.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="إجمالي الموديلات" value={stats.modules} icon={<BookOpen size={28} />} color="bg-blue-100 text-blue-600" />
        <StatCard title="إجمالي الدروس" value={stats.lessons} icon={<FileText size={28} />} color="bg-green-100 text-green-600" />
        <StatCard title="الطلبة المسجلين" value="قريباً" icon={<Users size={28} />} color="bg-purple-100 text-purple-600" />
        <StatCard title="الزيارات اليوم" value="قريباً" icon={<TrendingUp size={28} />} color="bg-yellow-100 text-yellow-600" />
      </div>

      {/* تقدر تزيد هنا مستقبلا جدول ديال آخر الدروس لي تضافو */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
         <h2 className="text-xl font-black text-slate-300">مساحة قابلة للتطوير مستقبلاً</h2>
      </div>
    </div>
  );
};

export default Dashboard;