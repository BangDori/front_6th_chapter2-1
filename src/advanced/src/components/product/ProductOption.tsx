import type { ProductOptionProps } from '../../types';
import { getStockStatus } from '../../utils/stock';

export const ProductOption = ({ item }: ProductOptionProps) => {
  const { status, text, isSelectable } = getStockStatus(item.q);
  
  // 할인 상태 계산
  const discountStates: string[] = [];
  if (item.onSale) discountStates.push('⚡SALE');
  if (item.suggestSale) discountStates.push('💝SUGGEST');

  const discountDisplay = discountStates.length > 0 ? ` (${discountStates.join(', ')})` : '';

  return (
    <option value={item.id} disabled={!isSelectable}>
      {item.name}
      {discountDisplay} - {item.val}원 - {text}
    </option>
  );
}; 