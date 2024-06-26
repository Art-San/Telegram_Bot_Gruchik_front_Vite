import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { OrderService } from '@/services/order/order.service'
import { IOrder } from '@/shared/types/order.types'

const isAuth = true
// pagination
export function useOrders() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['orders'],
    queryFn: () => OrderService.getAllOrders(),
    select: (data) => data.data, // избавляемся от лишней data
    enabled: isAuth // отключает включает запросник
    // надо читать Rename cacheTime to gcTime
    // keepPreviousData: true, // Сохраняет предыдущие данные до обновления
    // staleTime: 10000, // Данные считаются устаревшими через 10 секунд
    // cacheTime: 60000, // Данные удаляются из кэша через 60 секунд RED сказал что вырезали
  })

  // =======
  // isLoading срабатывает когда идет первый раз запрос
  // isFetched срабатывает когда данные обновляются из кэша

  const [orders, setOrders] = useState<IOrder[] | undefined>(data)

  useEffect(() => {
    setOrders(data)
  }, [data])

  return { orders, isLoading, isError }
}

// --------- keepPreviousData
// Ошибка, которую вы видите, указывает на то, что свойство keepPreviousData
// не является допустимым свойством для объекта опций, передаваемого в useQuery.
// Это свойство было введено в более поздних версиях React Query и может потребовать обновления
// зависимостей или использования другой подход для достижения желаемого поведения.

// Если вы столкнулись с этой проблемой, возможно, вы используете старую версию React Query,
// которая не поддерживает свойство keepPreviousData. В таком случае, вам следует обновить
// React Query до последней версии, чтобы воспользоваться всеми доступными функциями и улучшениями.

// {
//   "dependencies": {
//     "@tanstack/react-query": "^latest_version"
//   }
// }
