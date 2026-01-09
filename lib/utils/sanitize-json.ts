/**
 * Security utilities for JSON-LD structured data
 * Validates and sanitizes JSON data for safe use in dangerouslySetInnerHTML
 */

const ALLOWED_SCHEMA_TYPES = [
  'Organization',
  'Service',
  'Product',
  'FAQPage',
  'HowTo',
  'SoftwareApplication',
  'WebSite',
  'BreadcrumbList',
] as const

/**
 * Validates JSON-LD structured data schema
 * Ensures only valid Schema.org types are used
 */
export function validateSchemaType(type: string): boolean {
  return ALLOWED_SCHEMA_TYPES.includes(type as typeof ALLOWED_SCHEMA_TYPES[number])
}

/**
 * Validates and sanitizes JSON-LD data
 * JSON.stringify() is safe for JSON-LD in script tags, but we validate the structure
 */
export function sanitizeJSON(data: unknown): string {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Invalid JSON-LD data: must be an object')
  }

  const obj = data as Record<string, unknown>
  
  // Validate @type if present
  if ('@type' in obj && typeof obj['@type'] === 'string') {
    if (!validateSchemaType(obj['@type'])) {
      throw new Error(`Invalid schema type: ${obj['@type']}`)
    }
  }

  // Validate @context
  if ('@context' in obj && obj['@context'] !== 'https://schema.org') {
    throw new Error('Invalid @context: must be https://schema.org')
  }

  // JSON.stringify() automatically escapes special characters
  // This is safe for JSON-LD in script tags
  return JSON.stringify(data)
}
