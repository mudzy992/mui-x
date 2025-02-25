export const LICENSE_MODELS = [
  /**
   * A license is outdated if the current version of the software was released after the expiry date of the license.
   * But the license can be used indefinitely with an older version of the software.
   */
  'perpetual',
  /**
   * On development, a license is outdated if the expiry date has been reached
   * On production, a license is outdated if the current version of the software was released after the expiry date of the license (see "perpetual")
   */
  'annual',
  /**
   * TODO 2026 remove, legacy name of annual.
   */
  'subscription',
] as const;

export type LicenseModel = (typeof LICENSE_MODELS)[number];
