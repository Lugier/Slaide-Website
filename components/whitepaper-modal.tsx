'use client'

import { useState, useCallback, useEffect } from 'react'
import { X, Mail, Loader2, CheckCircle2, FileText, Building2, User } from 'lucide-react'

interface WhitepaperModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WhitepaperModal({ isOpen, onClose }: WhitepaperModalProps): JSX.Element | null {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [agbAccepted, setAgbAccepted] = useState(false)
  const [datenschutzAccepted, setDatenschutzAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Small delay for smooth animation
      setTimeout(() => setIsVisible(true), 10)
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    } else {
      setIsVisible(false)
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setError(null)

      if (!agbAccepted || !datenschutzAccepted) {
        setError('Bitte akzeptieren Sie die AGB und Datenschutzerklärung')
        return
      }

      setIsLoading(true)

      try {
        const response = await fetch('/api/send-whitepaper', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, company, email, agbAccepted, datenschutzAccepted }),
        })

        // Prüfe Content-Type bevor JSON-Parsing
        const contentType = response.headers.get('content-type')
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text()
          console.error('Unexpected response:', text.substring(0, 200))
          throw new Error('Ungültige Antwort vom Server. Bitte versuchen Sie es später erneut.')
        }

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Fehler beim Versenden der E-Mail')
        }

        setSuccess(true)
        setTimeout(() => {
          onClose()
          setName('')
          setCompany('')
          setEmail('')
          setAgbAccepted(false)
          setDatenschutzAccepted(false)
          setSuccess(false)
        }, 2000)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
      } finally {
        setIsLoading(false)
      }
    },
    [name, company, email, agbAccepted, datenschutzAccepted, onClose]
  )

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={`bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl max-w-lg w-full relative transform transition-all duration-300 ${
          isVisible 
            ? 'translate-y-0 opacity-100 sm:scale-100' 
            : 'translate-y-full sm:translate-y-4 opacity-0 sm:scale-95'
        } max-h-[92vh] overflow-y-auto sm:overflow-visible`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-5 sm:p-6 rounded-t-3xl sm:rounded-t-2xl sticky top-0 z-10 sm:relative">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Security Whitepaper</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-0.5">Kostenlos als PDF erhalten</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="Schließen"
              disabled={isLoading}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8">

          {success ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-[scale-in_0.3s_ease-out]">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">Erfolgreich versendet!</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1">
                Das Security Whitepaper wurde an
              </p>
              <p className="text-gray-900 font-medium mb-6 break-all">{email}</p>
              <p className="text-xs sm:text-sm text-gray-500">
                Bitte prüfen Sie Ihr Postfach (auch Spam-Ordner).
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
                Füllen Sie das Formular aus, um das Security Whitepaper kostenlos als PDF zu erhalten.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    <User className="w-4 h-4 text-gray-400" />
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      setError(null)
                    }}
                    required
                    placeholder="Max Mustermann"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none text-base transition-all text-black placeholder:text-gray-400 min-h-[48px]"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    Firma <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value)
                      setError(null)
                    }}
                    required
                    placeholder="Beispiel GmbH"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none text-base transition-all text-black placeholder:text-gray-400 min-h-[48px]"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    E-Mail-Adresse <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError(null)
                    }}
                    required
                    placeholder="ihre.email@beispiel.de"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none text-base transition-all text-black placeholder:text-gray-400 min-h-[48px]"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <label className="flex items-start gap-3 cursor-pointer group py-1">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        checked={agbAccepted}
                        onChange={(e) => {
                          setAgbAccepted(e.target.checked)
                          setError(null)
                        }}
                        required
                        className="sr-only"
                        disabled={isLoading}
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                          agbAccepted
                            ? 'bg-black border-black'
                            : 'border-gray-300 group-hover:border-gray-400'
                        }`}
                      >
                        {agbAccepted && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed flex-1">
                      Ich akzeptiere die{' '}
                      <a
                        href="/agb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black underline hover:text-gray-600 font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        AGB
                      </a>{' '}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group py-1">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        checked={datenschutzAccepted}
                        onChange={(e) => {
                          setDatenschutzAccepted(e.target.checked)
                          setError(null)
                        }}
                        required
                        className="sr-only"
                        disabled={isLoading}
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                          datenschutzAccepted
                            ? 'bg-black border-black'
                            : 'border-gray-300 group-hover:border-gray-400'
                        }`}
                      >
                        {datenschutzAccepted && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed flex-1">
                      Ich akzeptiere die{' '}
                      <a
                        href="/datenschutz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black underline hover:text-gray-600 font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Datenschutzerklärung
                      </a>{' '}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                {error && (
                  <div className="p-3 sm:p-4 bg-red-50 border-l-4 border-red-500 rounded-lg animate-in fade-in slide-in-from-left-2">
                    <p className="text-xs sm:text-sm text-red-700 font-medium">{error}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-4 pb-2 sm:pb-0">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3.5 sm:py-3.5 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:shadow-lg order-1 sm:order-2 min-h-[52px] sm:min-h-[44px]"
                    disabled={isLoading || !name || !company || !email || !agbAccepted || !datenschutzAccepted}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Wird gesendet...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        <span>Whitepaper anfordern</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3.5 sm:py-3.5 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-100 transition-all disabled:opacity-50 text-gray-700 order-2 sm:order-1 min-h-[52px] sm:min-h-[44px]"
                    disabled={isLoading}
                  >
                    Abbrechen
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
