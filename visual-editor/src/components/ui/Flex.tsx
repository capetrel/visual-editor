import { ElementType, forwardRef, ReactNode } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

type FlexProps = {
  between?: boolean
  column?: boolean
  gap?: number,
  as?: ElementType<any>
} & JSX.IntrinsicElements['div']

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ between, column, ...props }, ref) => {
    return (
      <Wrapper
        {...props}
        ref={ref}
        css={[between && Between, column && Column]}
      />
    )
  }
)

Flex.displayName = 'Flex'

const Wrapper = styled.div<FlexProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ({ gap = 1 }) => ({
    gap: gap + 'em',
    gridGap: gap + 'em',
  })
)

const Between = {
  justifyContent: 'space-between',
}

const Column = {
  display: 'grid',
  alignContent: 'flex-start',
  gridTemplateColumns: '1fr',
  alignItems: 'flex-start',
}
