import { Container, Tab, TabList, Tabs } from "@chakra-ui/react";
import { VISIBILITIY_FILTER } from "../constants";

export const VisibiltyFilter = () => {
  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {Object.keys(VISIBILITIY_FILTER).map((filterKey) => {
            const currentFilter = VISIBILITIY_FILTER[filterKey];
            return (
              <Tab key={`visibility-filter-${currentFilter}`}>
                {currentFilter}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </Container>
  );
};
