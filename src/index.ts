// Copyright 2023 MongoDB Inc
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// L1 Constructors
export * from './l1-resources/clusters';
export * from './l1-resources/database-user';
export * from './l1-resources/encryption-at-rest';
export * from './l1-resources/project';
export * from './l1-resources/project-ip-access-list';
export * from './l1-resources/third-party-integration';
export { CfnPrivateEndpointProps, CfnPrivateEndpoint, PrivateEndpoint } from './l1-resources/private-endpoint';


// L2 Constructors
export * from './l2-resources/encryption-at-rest';
export * from './l2-resources/third-party-integration';

// L3 Constructors
export * from './l3-resources/atlas-basic';
export * from './l3-resources/atlas-basic-private-endpoint';
export * from './l3-resources/encryption-at-rest-express';

export * from './l3-resources/common/props';
