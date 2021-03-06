import { EtherscanPageType, getEtherscanLink } from "../../../utils/url";
import { Avatar, Box } from "degen";
import { Text } from "../../../elements/Text";
import { shortenAddress } from "../../../utils/address";

type BidderBlockProps = {
  avatarURI?: string | null;
  bidderAddress: string;
  bidderENS?: string | null;
  tokenBalance: string;
};

export function BidderBlock({
  bidderAddress,
  bidderENS,
  avatarURI,
  tokenBalance,
}: BidderBlockProps) {
  return (
    <a
      href={getEtherscanLink(EtherscanPageType.ADDRESS, bidderAddress)}
      target="_blank"
      rel="noreferrer"
    >
      <Box display="flex" flexDirection="row" justifyContent="flex-start">
        {avatarURI && (
          <Avatar
            label="Avatar"
            src={avatarURI}
            size={{
              xs: "4",
              md: "4",
              lg: "5",
              xl: "6",
            }}
            shape="square"
          />
        )}
        <Box display="flex" flexDirection="column">
          <Text
            font="mono"
            transform={bidderENS ? "uppercase" : undefined}
            underline="hover"
          >
            {bidderENS || shortenAddress(bidderAddress)}
          </Text>
          {/* <Text variant="small" color="textSecondary"> */}
          {/*   {tokenBalance} Nouns */}
          {/* </Text> */}
        </Box>
      </Box>
    </a>
  );
}
