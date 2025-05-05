import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext'

export default function WhatWeDo() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);
  const teamData = t('whatWeDo_team');
  const icons = [
    (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    (
      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    (
      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-gray-950 text-white px-6 py-24 flex flex-col items-center justify-center relative overflow-hidden min-h-screen"
    >
      {/* FONDO MEJORADO */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-800 blur-3xl opacity-15 animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-900 blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* SECCIÓN PRINCIPAL */}
      {(isInView || isMobile) && (
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 mb-32">
          {/* LEFT - FILOSOFÍA Y SERVICIOS */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView || isMobile ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight"
                dangerouslySetInnerHTML={{ __html: t('whatWeDo_title') }}
              />
              <p className="text-gray-400 mt-2">
                {t('whatWeDo_subtitle')}
              </p>
            </div>

            <ul className="space-y-6 border-l-2 border-blue-500 pl-6">
              {t('whatWeDo_steps').map((step, index) => (
                <li key={index}>
                  <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </li>
              ))}
            </ul>

            {/* NUEVA SECCIÓN DE SERVICIOS */}
            <div className="pt-6">
              <h3
                className="text-xl font-semibold text-white mb-4"
                dangerouslySetInnerHTML={{ __html: t('whatWeDo_servicesTitle') }}
              />
              <div className="grid grid-cols-2 gap-4">
                {t('whatWeDo_services').map((service, i) => {
                  const icons = [
                    {
                      color: 'blue', svg: (
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )
                    },
                    {
                      color: 'purple', svg: (
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      )
                    },
                    {
                      color: 'green', svg: (
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )
                    },
                    {
                      color: 'yellow', svg: (
                        <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )
                    }
                  ];
                  const { color, svg } = icons[i];

                  return (
                    <div key={i} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <div className={`w-8 h-8 bg-${color}-500/10 rounded-full flex items-center justify-center mb-2`}>
                        {svg}
                      </div>
                      <h4 className="text-sm font-medium">{service.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* RIGHT - KPI / CTA MEJORADO */}
          <motion.div
            className="relative w-full max-w-xl mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView || isMobile ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <p
                  className="text-xl sm:text-2xl text-white font-bold mb-2"
                  dangerouslySetInnerHTML={{ __html: t('whatWeDo_kpiTitle') }}
                ></p>

                <p className="text-sm text-gray-400">
                  {t('whatWeDo_kpiSubtitle')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-xs text-gray-400">{t('whatWeDo_stats.0.label')}</div>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                  <div className="text-xs text-gray-400">{t('whatWeDo_stats.1.label')}</div>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">x3</div>
                  <div className="text-xs text-gray-400">{t('whatWeDo_stats.2.label')}</div>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">99.9%</div>
                  <div className="text-xs text-gray-400">{t('whatWeDo_stats.3.label')}</div>
                </div>
              </div>

              {/* NUEVO: CASO DE ÉXITO */}
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{t('whatWeDo_successCaseTitle')}</h4>
                    <p className="text-xs text-gray-400">
                      {t('whatWeDo_successCaseDesc')}
                    </p>
                  </div>
                </div>
              </div>


              <div className="flex flex-col sm:flex-row gap-3">
              </div>
            </div>

            {/* NUEVO: TECNOLOGÍAS */}
            <div className="mt-8 bg-gray-800/40 rounded-lg p-6 border border-gray-700">
              <h4 className="text-sm font-semibold text-white mb-4 text-center">
                {t('whatWeDo_technologiesTitle')}
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['React', 'Next.js', 'Node', 'AWS', 'Docker', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Kubernetes', 'TensorFlow'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300 border border-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}


      {/* SECCIÓN DE METODOLOGÍA MEJORADA */}
      <div className="max-w-7xl w-full py-24 px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            dangerouslySetInnerHTML={{ __html: t('whatWeDo_processTitle') }}
          />
          <p
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {t("whatWeDo_processSubtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Línea de tiempo decorativa animada */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
            className="hidden md:block absolute h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent top-1/4 left-0 right-0 -translate-y-1/2 origin-left"
          />

          <div className="grid md:grid-cols-4 gap-8">
            {t("whatWeDo_process", { returnObjects: true }).map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`bg-gradient-to-br ${["from-blue-500/10 to-blue-800/5", "from-purple-500/10 to-purple-800/5", "from-green-500/10 to-green-800/5", "from-yellow-500/10 to-yellow-800/5"][i]
                  } p-6 rounded-xl border border-gray-700 relative z-10 shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center mb-4 mx-auto">
                  {/* Podés mapear los íconos igual que los colores si querés modularizar más */}
                  {[
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4 4m-4-4l4-4m11 4a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  ][i]}
                </div>
                <h3 className="font-bold text-xl text-center mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm text-center">{step.description}</p>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-gray-600 text-xs font-mono">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* SECCIÓN DE EQUIPO MEJORADA */}
      <div className="max-w-7xl w-full py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: t('whatWeDo_teamTitle') }}
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('whatWeDo_teamSubtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center relative overflow-hidden group"
              >
                {/* Fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Ícono/avatar */}
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-800 mb-4 flex items-center justify-center text-2xl border border-gray-600 group-hover:border-blue-400 transition-all">
                  {icons[i]}
                </div>

                {/* Info principal */}
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-3">{member.specialty}</p>

                {/* Hover con habilidades y fun fact */}
                <div className="mt-4 pt-4 border-t border-gray-700/50 group-hover:border-gray-600 transition-all">
                  <p className="text-xs text-gray-400 mb-3">{member.funFact}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, j) => (
                      <span key={j} className="px-2 py-1 bg-gray-700/30 text-xs rounded-full text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
} 