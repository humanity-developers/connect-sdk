export type EnvironmentName = 'production' | 'sandbox';

export interface EnvironmentDescriptor {
  name: EnvironmentName | string;
  /** Base URL for REST API calls (e.g. `https://api.humanity.org`). */
  apiBaseUrl: string;
  /**
   * Base URL used to construct the OIDC well-known discovery URL
   * (`{discoveryBaseUrl}/.well-known/openid-configuration`).
   * Defaults to `apiBaseUrl`.
   */
  discoveryBaseUrl?: string;
  /**
   * The canonical OIDC issuer (`iss` claim in tokens).
   *
   * The Humanity API returns issuer with a `/v2` path suffix in the OIDC
   * discovery document, while the discovery endpoint itself is at the root
   * (non-spec-compliant placement). This field captures the correct issuer
   * for token validation without deriving it from `discoveryBaseUrl`.
   *
   * Defaults to `discoveryBaseUrl ?? apiBaseUrl` when not set.
   */
  issuerUrl?: string;
}

const DEFAULT_ENVIRONMENTS: Record<EnvironmentName, EnvironmentDescriptor> = {
  production: {
    name: 'production',
    apiBaseUrl: 'https://api.humanity.org',
    discoveryBaseUrl: 'https://api.humanity.org',
    issuerUrl: 'https://api.humanity.org/v2',
  },
  sandbox: {
    name: 'sandbox',
    apiBaseUrl: 'https://api.sandbox.humanity.org',
    discoveryBaseUrl: 'https://api.sandbox.humanity.org',
    issuerUrl: 'https://api.sandbox.humanity.org/v2',
  },
};

export class EnvironmentRegistry {
  private readonly descriptors: Map<string, EnvironmentDescriptor>;

  constructor(initial?: EnvironmentDescriptor[]) {
    this.descriptors = new Map(
      Object.values(DEFAULT_ENVIRONMENTS).map((descriptor) => [descriptor.name, descriptor]),
    );

    if (initial?.length) {
      initial.forEach((descriptor) => this.register(descriptor));
    }
  }

  register(descriptor: EnvironmentDescriptor): void {
    this.descriptors.set(descriptor.name, {
      ...descriptor,
      discoveryBaseUrl: descriptor.discoveryBaseUrl ?? descriptor.apiBaseUrl,
    });
  }

  resolve(name?: EnvironmentName | string): EnvironmentDescriptor {
    if (!name) {
      return this.descriptors.get('production')!;
    }
    return (
      this.descriptors.get(name) ??
      (() => {
        const fallback = Array.from(this.descriptors.values()).find(
          (descriptor) => descriptor.name.toLowerCase() === name.toLowerCase(),
        );
        if (fallback) return fallback;
        throw new Error(`Unknown Humanity SDK environment "${name}"`);
      })()
    );
  }

  list(): EnvironmentDescriptor[] {
    return Array.from(this.descriptors.values());
  }
}

