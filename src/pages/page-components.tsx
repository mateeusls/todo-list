import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import { Container } from "../components/container";
import { Text } from "../components/text";
import { Icon } from "../components/icon";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { ButtonIcon } from "../components/button-icon";
import { InputText } from "../components/input-text";
import { InputCheckbox } from "../components/input-checkbox";
import { Card } from "../components/card";
import { Skeleton } from "../components/skeleton";

// export interface PageComponentsProps {}

export function PageComponents() {
  return (
    <Container>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Text variant="body-md">Hello world!</Text>
          <Text variant="body-md-bold">Hello world!</Text>
          <Text variant="body-sm-bold">Hello world!</Text>
        </div>

        <div className="flex items-center gap-4">
          <Icon svg={TrashIcon} />
          <Icon svg={CheckIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={XIcon} />
          <Icon svg={SpinnerIcon} animate />
        </div>

        <div className="flex gap-3">
          <Badge variant="primary">2 de 5</Badge>
          <Badge variant="secondary">5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
          <Button icon={TrashIcon}>Excluir tarefa</Button>
        </div>

        <div className="flex items-center gap-3">
          <ButtonIcon icon={PlusIcon} />
          <ButtonIcon variant="secondary" icon={TrashIcon} />
          <ButtonIcon variant="tertiary" icon={PencilIcon} />
          <ButtonIcon variant="tertiary" icon={PencilIcon} disabled />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText placeholder="Digite aqui..." />
          <InputText placeholder="Disabled input" disabled />
        </div>

        <div>
          <InputCheckbox loading />
          <InputCheckbox disabled={true} />
        </div>

        <div>
          <Card>
            <Text variant="body-md">Conteúdo do Card</Text>
          </Card>

          <Card size="md">
            <Text variant="body-md">Conteúdo do Card Secundário</Text>
          </Card>
        </div>

        <div className="grid gap-2">
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
}
