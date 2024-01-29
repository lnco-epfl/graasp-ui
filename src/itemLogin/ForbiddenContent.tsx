import { Container, Typography, styled } from '@mui/material';

import { FC, ReactNode } from 'react';

import Button from '../buttons/Button';
import ForbiddenText from './ForbiddenText';

const StyledContainer = styled(Container)({
  textAlign: 'center',
});

export interface ForbiddenContentProps {
  /**
   * Id of the current member used for saving the resizing preferences
   */
  memberId?: string;
  signOut: () => void;
  id?: string;
  showPseudonymized?: boolean;
  forbiddenTextId?: string;
  signOutText?: string;
  defaultOptions?: JSX.Element[];
}

const ForbiddenContent: FC<ForbiddenContentProps> = ({
  signOut,
  memberId,
  id,
  forbiddenTextId,
  showPseudonymized = false,
  signOutText = 'Sign out to access as pseudonymized user',
  defaultOptions = [
    <Typography>{'Ask the creator to share this item with you'}</Typography>,
  ],
}) => {
  const handleSignOut = (): void => {
    signOut();
  };

  const renderAuthenticatedAlternatives = (): ReactNode => {
    let options = defaultOptions;

    if (showPseudonymized) {
      options = options.concat(
        <Button sx={{ mt: 1 }} onClick={handleSignOut}>
          {signOutText}
        </Button>,
      );
    }

    return options;
  };

  return (
    <StyledContainer id={id}>
      <ForbiddenText id={forbiddenTextId} />
      {memberId && renderAuthenticatedAlternatives()}
    </StyledContainer>
  );
};

export default ForbiddenContent;
