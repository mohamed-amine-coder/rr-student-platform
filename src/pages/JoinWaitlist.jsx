import React, { useState } from 'react';
import { User, Phone, ArrowRight, CheckCircle, Loader2, Package, BookOpen, Microscope, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const JoinWaitlist = () => {
  // حيدنا القيمة الافتراضية باش نجبزوه يختار (أو نخليوها ونبينوها مزيان)
  // هنا خليتها full_pack ولكن التصميم غايخليه ينتبه
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    interest: 'full_pack'
  });
  const [status, setStatus] = useState('idle');

  const interestOptions = [
    { id: 'multi_pack', label: 'أكثر من موديل', icon: BookOpen, badge: 'توفير %🔥', desc: 'اختيار مخصص' },
    { id: 'full_pack', label: 'باقة S1/S2 كاملة', icon: Package, badge: null, desc: 'كلشي فدقة وحدة' },
    { id: 'single_module', label: 'موديل واحد', icon: Microscope, badge: null, desc: 'تجربة المادة' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    const templateParams = {
      to_name: "Admin RR Student",
      from_name: formData.fullName,
      phone_number: formData.phone,
      interest_level: interestOptions.find(o => o.id === formData.interest)?.label 
    };

    emailjs.send(
      'service_ak41qjj',
      'template_f83qtkc',
      templateParams,
      'Z3v-p7hE6p3I2SwTs'
    )
    .then(() => {
      setStatus('success');
    }, (err) => {
      console.log('FAILED...', err);
      setStatus('idle');
      alert("خطأ: " + JSON.stringify(err));
    });
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl text-center border border-slate-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600 animate-bounce" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">مبروك! 🎉</h2>
          <p className="text-slate-600 mb-6">
            تم حجز مقعدك بنجاح. ختاريتي: <strong>{interestOptions.find(o => o.id === formData.interest)?.label}</strong>
          </p>
          <Link to="/" className="block w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all">
            الرجوع للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Container العريض (Wide) */}
      <div className="bg-white w-full max-w-6xl rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse border border-white">
        
        {/* القسم 1: الاختيار (واضح وكبير باش ينتبه ليه) */}
        <div className="md:w-1/2 bg-slate-50 p-6 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
            <div className="mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">المرحلة 1 من 2</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">فاش بغيتي تشترك ملي يتفتح التسجيل ؟ 🎯</h2>
                <p className="text-slate-800 mt-3 text-sm font-bold">اختار العرض اللي كيناسبك باش نوجدو ليك بلاصتك.</p>
            </div>

            <div className="space-y-3">
                {interestOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFormData({...formData, interest: option.id})}
                    className={`w-full relative flex items-center p-4 rounded-2xl border-2 transition-all duration-300 group cursor-pointer ${
                      formData.interest === option.id 
                        ? 'border-slate-900 bg-white shadow-lg scale-[1.02] z-10' 
                        : 'border-slate-200 bg-slate-100/50 hover:border-slate-300 hover:bg-white text-slate-400'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ml-4 transition-colors duration-300 ${formData.interest === option.id ? 'bg-slate-900 text-yellow-400' : 'bg-slate-200 text-slate-500'}`}>
                      <option.icon size={24} />
                    </div>
                    
                    <div className="text-right flex-1">
                        <div className="flex items-center justify-between">
                            <span className={`font-bold text-lg ${formData.interest === option.id ? 'text-slate-900' : 'text-slate-500'}`}>
                                {option.label}
                            </span>
                            {/* Checkmark Circle - Visual feedback */}
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                formData.interest === option.id ? 'border-slate-900 bg-slate-900' : 'border-slate-300'
                            }`}>
                                {formData.interest === option.id && <CheckCircle size={14} className="text-white" />}
                            </div>
                        </div>
                        <p className={`text-xs mt-1 ${formData.interest === option.id ? 'text-slate-500' : 'text-slate-400'}`}>
                            {option.desc}
                        </p>
                    </div>

                    {option.badge && (
                        <span className="absolute -top-3 left-4 bg-yellow-400 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm animate-pulse">
                            {option.badge}
                        </span>
                    )}
                  </button>
                ))}
            </div>
        </div>

        {/* القسم 2: المعلومات (الفورم) */}
        <div className="md:w-1/2 p-6 md:p-12 bg-white flex flex-col justify-center relative">
            
            <div className="mb-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">المرحلة 2 من 2</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">تقديم طلب التسجيل القبلي 🚀</h2>
                <p className="text-slate-500 mt-2 font-bold text-sm">عمر المعلومات ديالك باش نعلموك فاش نفتحو التسجيل.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div className="relative group">
                        <label className="text-xs font-bold text-slate-700 mb-1.5 block mr-1">السمية والكنية</label>
                        <User className="absolute right-4 top-9 text-slate-400 w-5 h-5 group-focus-within:text-slate-900 transition-colors" />
                        <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="الاسم الكامل ديالك"
                        className="w-full pr-12 pl-4 py-4 bg-slate-50 border-2 border-yellow-600 rounded-2xl focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-100 transition-all outline-none text-right font-bold text-slate-900"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        />
                    </div>

                    <div className="relative group">
                        <label className="text-xs font-bold text-slate-700 mb-1.5 block mr-1">نمرة الواتساب (ضرورية)</label>
                        <Phone className="absolute right-4 top-9 text-slate-400 w-5 h-5 group-focus-within:text-slate-900 transition-colors" />
                        <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="06 XX XX XX XX"
                        className="w-full pr-12 pl-4 py-4 bg-slate-50 border-2 border-yellow-600 rounded-2xl focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-100 transition-all outline-none text-right font-bold text-slate-900 dir-rtl"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl shadow-xl shadow-slate-900/10 hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 text-lg group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                    {status === 'loading' ? (
                        <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>جاري الحجز...</span>
                        </>
                    ) : (
                        <>
                        <span>حجز المقعد دابا</span>
                        <ArrowRight className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </>
                    )}
                    </button>
                    <p className="text-xs text-center text-slate-400 mt-4">
                     🔒 التسجيل مجاني 100% ولا يتطلب الدفع الآن
                    </p>
                </div>
            </form>
        </div>

      </div>
    </div>
  );
};

export default JoinWaitlist;