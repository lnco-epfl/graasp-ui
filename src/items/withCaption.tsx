import TextDisplay from '@/TextDisplay/TextDisplay';

import { Stack } from '@mui/material';

import { DescriptionPlacement, DescriptionPlacementType } from '@graasp/sdk';

const DEFAULT_ITEM_DESCRIPTION = '';

type WithCaptionItem = {
  description: string | null;
  settings?: {
    descriptionPlacement?: DescriptionPlacementType;
  };
};

type WithCaptionProps<T extends WithCaptionItem> = {
  item: T;
};

function withCaption<T extends WithCaptionItem>({ item }: WithCaptionProps<T>) {
  return (component: JSX.Element): JSX.Element => {
    const ChildComponent = (): JSX.Element => {
      const descriptionPlacement =
        item.settings?.descriptionPlacement ?? 'below';
      const direction =
        descriptionPlacement === DescriptionPlacement.ABOVE
          ? 'column-reverse'
          : 'column';
      return (
        <Stack direction={direction}>
          {component}
          <TextDisplay content={item.description ?? DEFAULT_ITEM_DESCRIPTION} />
        </Stack>
      );
    };

    return <ChildComponent />;
  };
}

export default withCaption;
