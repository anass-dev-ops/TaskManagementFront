import { TestBed } from '@angular/core/testing';

import { ProjectSeviceService } from './project-sevice.service';

describe('ProjectSeviceService', () => {
  let service: ProjectSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
