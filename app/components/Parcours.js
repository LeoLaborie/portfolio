"use client"

import { useTranslations } from "next-intl"
import { Award, Calendar, Code, Calculator } from "lucide-react"

export default function Parcours() {
  const t = useTranslations("Parcours")

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">{t("Title")}</h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col md:flex-row md:justify-center md:items-stretch md:gap-12">
          {/* Vertical Timeline Line (Mobile Only) */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-600 md:hidden"></div>
          {/* Horizontal Timeline Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-600 transform -translate-y-1/2 z-0"></div>

          {/* Baccalauréat Entry */}
          <div className="relative mb-16 md:mb-0 md:flex-1 flex">
            <div className="ml-16 md:ml-0 md:mt-0 flex-1">
              <div className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-800">{t("BacTitle")}</h3>
                </div>
                <div className="flex items-center gap-2 mb-6 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{t("BacSession")}</span>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">{t("BacSpecialties")}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calculator className="w-4 h-4 text-blue-500" />
                      <span>{t("MathsSpecialty")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Code className="w-4 h-4 text-purple-500" />
                      <span>{t("NSI_Specialty")}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-100 rounded-xl">
                    <div className="text-3xl font-bold text-blue-700 mb-1">18/20</div>
                    <div className="text-sm text-blue-600 font-medium">{t("MathsScoreLabel")}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-100 rounded-xl">
                    <div className="text-3xl font-bold text-purple-700 mb-1">20/20</div>
                    <div className="text-sm text-purple-600 font-medium">{t("InfoScoreLabel")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UTC Engineering Entry */}
          <div className="relative md:flex-1 flex">
            <div className="ml-16 md:ml-0 md:mt-0 flex-1">
              <div className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-800">{t("UtcTitle")}</h3>
                </div>
                <div className="flex items-center gap-2 mb-6 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{t("UtcYears")}</span>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-4">{t("UtcDescription")}</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-800">{t("TroncCommunTitle")}</div>
                        <div className="text-sm text-gray-600">{t("TroncCommunDesc")}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-700">{t("TroncCommunDuration")}</div>
                        <div className="text-xs text-gray-500">{t("TroncCommunYears")}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-800">{t("GenieInfoTitle")}</div>
                        <div className="text-sm text-gray-600">{t("GenieInfoDesc")}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-purple-700">{t("GenieInfoDuration")}</div>
                        <div className="text-xs text-purple-500">{t("GenieInfoYears")}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-xl text-center">
                  <div className="font-semibold">{t("InProgress")}</div>
                  <div className="text-sm opacity-90">{t("CurrentlyStudying")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
