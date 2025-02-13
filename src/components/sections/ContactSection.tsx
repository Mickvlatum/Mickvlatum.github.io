import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, Calendar, MapPin, Phone, ArrowRight, Check, Loader2, AlertCircle } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Card } from "../ui/Card";
import { cn } from "../../utils/cn";
const socialLinks = [{
  name: "GitHub",
  icon: Github,
  url: "#",
  color: "from-gray-500 to-gray-600"
}, {
  name: "LinkedIn",
  icon: Linkedin,
  url: "#",
  color: "from-blue-500 to-blue-600"
}, {
  name: "Twitter",
  icon: Twitter,
  url: "#",
  color: "from-sky-400 to-sky-500"
}];
const contactMethods = [{
  icon: Mail,
  title: "Email",
  value: "hello@example.com",
  action: "mailto:hello@example.com"
}, {
  icon: Phone,
  title: "Phone",
  value: "+1 (555) 123-4567",
  action: "tel:+15551234567"
}, {
  icon: MapPin,
  title: "Location",
  value: "Amsterdam, Netherlands",
  action: "#"
}];
export const ContactSection = () => {
  const {
    t
  } = useLanguage();
  const {
    theme
  } = useTheme();
  const isDark = theme === "dark";
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) {
      newErrors.name = t("contact.validation.name_required");
    }
    if (!formState.email.trim()) {
      newErrors.email = t("contact.validation.email_required");
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = t("contact.validation.email_invalid");
    }
    if (!formState.message.trim()) {
      newErrors.message = t("contact.validation.message_required");
    } else if (formState.message.length < 10) {
      newErrors.message = t("contact.validation.message_min");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        message: ""
      });
    }, 3000);
  };
  return <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-16">
          <motion.div initial={{
          width: 0
        }} animate={{
          width: "100%"
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }} className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8" />
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className={theme === "light" ? "text-gray-900" : "text-white"}>
              {t("contact.title")}
            </span>
          </h2>
          <p className={`text-xl ${theme === "light" ? "text-gray-600" : "text-gray-400"} max-w-2xl mx-auto mb-6`}>
            {t("contact.subtitle")}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-purple-400">
              {t("contact.cta.availability")}
            </span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => <motion.a key={method.title} href={method.action} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className={cn("group relative overflow-hidden rounded-2xl border border-purple-500/20", "bg-white/5 backdrop-blur-sm p-6 hover:border-purple-500/40", "transition-all duration-300")}>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 
                              flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <method.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {t(`contact.connect.${method.title.toLowerCase()}_title`)}
                  </h3>
                  <p className="text-gray-400">
                    {t(`contact.connect.${method.title.toLowerCase()}`)}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-500 transform translate-x-0 
                                   group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className={cn("relative overflow-hidden rounded-2xl border border-purple-500/20", "backdrop-blur-sm p-6 md:p-8", isDark ? "bg-black/40" : "bg-white/60")}>
            <div className="relative">
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                {t("contact.form.title")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "message"].map(field => <div key={field} className="relative">
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      {t(`contact.form.${field}`)}
                    </label>
                    {field === "message" ? <textarea value={formState[field as keyof typeof formState]} onChange={e => setFormState(prev => ({
                  ...prev,
                  [field]: e.target.value
                }))} className={cn("w-full h-32 border rounded-xl px-4 py-3", isDark ? "bg-black/50" : "bg-white/50", isDark ? "text-white" : "text-gray-900", "placeholder-gray-500 focus:outline-none", "transition-all duration-200 resize-none", errors[field] ? "border-red-500/50 focus:border-red-500" : "border-purple-500/20 focus:border-purple-500/50")} placeholder={t(`contact.form.${field}_placeholder`)} /> : <input type={field === "email" ? "email" : "text"} value={formState[field as keyof typeof formState]} onChange={e => setFormState(prev => ({
                  ...prev,
                  [field]: e.target.value
                }))} className={cn("w-full border rounded-xl px-4 py-3", isDark ? "bg-black/50" : "bg-white/50", isDark ? "text-white" : "text-gray-900", "placeholder-gray-500 focus:outline-none", "transition-all duration-200", errors[field] ? "border-red-500/50 focus:border-red-500" : "border-purple-500/20 focus:border-purple-500/50")} placeholder={t(`contact.form.${field}_placeholder`)} />}
                    {errors[field] && <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors[field]}</span>
                      </div>}
                  </div>)}
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} disabled={isSubmitting || isSubmitted} className={cn("w-full py-3 rounded-xl flex items-center justify-center gap-2", "text-white transition-all duration-200 relative overflow-hidden", isSubmitted ? "bg-green-500 hover:bg-green-600" : "bg-purple-500 hover:bg-purple-600")}>
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : isSubmitted ? <Check className="w-5 h-5" /> : <>
                      <Send className="w-4 h-4" />
                      {t("contact.form.send")}
                    </>}
                </motion.button>
              </form>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="space-y-6">
            <Card gradient hover={false} className={cn("p-6 md:p-8", isDark ? "bg-black/40" : "bg-white/60")}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                {t("contact.social.title")}
              </h3>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {t("contact.social.description")}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {socialLinks.map((social, index) => <motion.a key={social.name} href={social.url} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: index * 0.1
              }} className={cn("group relative overflow-hidden rounded-xl border border-purple-500/20", "backdrop-blur-sm p-4 hover:border-purple-500/40", "transition-all duration-300", isDark ? "bg-black/40" : "bg-white/40")}>
                    <div className={cn("absolute inset-0 bg-gradient-to-br", social.color, "opacity-0 group-hover:opacity-10 transition-opacity duration-500")} />
                    <div className="relative flex flex-col items-center gap-2">
                      <social.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      <span className={cn("text-sm transition-colors", isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-900")}>
                        {t(`contact.social.${social.name.toLowerCase()}`)}
                      </span>
                    </div>
                  </motion.a>)}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>;
};