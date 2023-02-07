/*
 * Shared types to normalize interfaces between the different
 * Taro implementations
 */
export interface TaroAsset {
  id: string;
  name: string;
  meta: string;
  type: string;
  amount: string;
  genesisPoint: string;
  genesisBootstrapInfo: string;
  anchorOutpoint: string;
}

export interface TaroBalance {
  id: string;
  name: string;
  meta: string;
  type: string;
  balance: string;
  genesisPoint: string;
  genesisBootstrapInfo: string;
  groupKey?: string;
}

export interface TaroAssetReceipt {
  batchKey: string;
}

export interface TaroAddress {
  encoded: string;
  id: string;
  type: string;
  amount: string;
  family: string | undefined;
  scriptKey: string;
  internalKey: string;
  taprootOutputKey: string;
}

export interface TaroSendAssetReciept {
  transferTxid: string;
  anchorOutputIndex: number;
  transferTxBytes: string;
  totalFeeSats: string;
}

export enum TARO_ASSET_TYPE {
  NORMAL = 'NORMAL',
  COLLECTIBLE = 'COLLECTIBLE',
}
